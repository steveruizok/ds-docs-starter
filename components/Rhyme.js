import {
  Panel,
  Tabs,
  Tab,
  Textarea,
  Text,
  Switch,
  Heading,
  Button,
  Small,
  Slider,
  Flex,
  Box,
  Label,
  Input,
  Select
} from "rebass";
import React from "react";

const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

class Rhyme extends React.Component {
  constructor(props) {
    super(props);

    this.measure = React.createRef();

    this.state = {
      width: 0,
      activeTab: 0
    };

    Object.keys(this.props.knobs).map(key => {
      const knob = this.props.knobs[key];
      knob.name = key;
      this.state = { ...this.state, [key]: knob.default };
    });
  }

  createKnob = knob => {
    if (knob.hidden !== undefined) {
      if (knob.hidden(this.state)) {
        return;
      }
    }

    const input = this.createKnobInput(knob);

    return (
      <Panel.Footer key={"Footer_" + knob.name}>
        <Flex alignItems="center">
          <Box key={"Label_" + knob.name} width="38.2%">
            <Label>{knob.label}</Label>
          </Box>
          <Box key={"Input_" + knob.name} width="61.8%">
            {input}
          </Box>
        </Flex>
      </Panel.Footer>
    );
  };

  createKnobInput = knob => {
    let ref = React.createRef();
    const key = knob.name;

    const handleChange = throttle(ev => {
      console.log(ev.target.value);
      this.setState({ [knob.name]: ev.target.value });
    }, 250);

    const currentValue = this.state[knob.name];

    switch (knob.type) {
      // TEXT
      case "text":
        return (
          <Input
            key={key}
            onChange={handleChange}
            defaultValue={currentValue}
          />
        );
      // TEXTAREA
      case "textarea":
        return (
          <Textarea
            key={key}
            onChange={handleChange}
            defaultValue={currentValue}
          />
        );
      // DATE
      case "date":
        return (
          <input
            key={key}
            type="date"
            min={knob.min}
            max={knob.max}
            onChange={handleChange}
            value={currentValue}
          />
        );
      // NUMBER
      case "number":
        return [
          <Text key={key + "_slider_currentValue"} textAlign="center">
            <Small key={key + "_slider_max"}>{currentValue}</Small>
          </Text>,
          <Slider
            key={key}
            min={knob.min}
            max={knob.max}
            onChange={handleChange}
            defaultValue={currentValue}
          />,
          <Flex key={key + "_slider_values"} justifyContent="space-between">
            <Small key={key + "_slider_min"}>{knob.min}</Small>
            <Small key={key + "_slider_max"}>{knob.max}</Small>
          </Flex>
        ];
      // ENUMERATED VALUE
      case "enum":
        return (
          <Select key={key} onChange={handleChange} defaultValue={currentValue}>
            {knob.options.map((o, index) => (
              <option key={key + "_option_" + index} value={o}>
                {knob.labels[index]}
              </option>
            ))}
          </Select>
        );
      // SEGMENTED ENUMERATED VALUE
      case "segment":
        return (
          <Box>
            {knob.options.map((o, index) => (
              <Button
                color={currentValue === o ? "white" : "darken"}
                bg={currentValue === o ? "black" : "gray"}
                mr={2}
                key={key + "_option_" + index}
                onClick={ev => {
                  this.setState({ [knob.name]: o });
                }}
                children={knob.labels[index]}
              />
            ))}
          </Box>
        );
      // BOOLEAN
      case "boolean":
        return (
          <Switch
            color={currentValue ? "black" : "darken"}
            key={key}
            onClick={ev => {
              this.setState({ [knob.name]: !currentValue });
            }}
            checked={currentValue}
          />
        );
      // COLOR
      case "color":
        return [
          <input
            ref={ref}
            key={key}
            type="color"
            name={knob.name}
            onChange={handleChange}
            value={currentValue}
            style={{
              padding: 0,
              margin: 0,
              borderWidth: 0,
              height: "32px",
              width: "56px",
              borderColor: "none",
              backgroundColor: "none"
            }}
          />
        ];
      // TODO: IMAGE
      default:
        return <span>Nothing for that type.</span>;
    }
  };

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", throttle(this.updateWidth, 100));
  }

  updateWidth = ev => {
    if (!this.measure.current) {
      return;
    }

    const node = this.measure.current.childNodes[0];

    if (!node) {
      return;
    }

    if (node.offsetWidth === this.state.width) {
      return;
    }

    this.setState({ width: node.offsetWidth });
  };

  render() {
    return (
      <div>
        <Heading fontSize="4" my={3}>
          {this.props.name}
        </Heading>
        <Panel width="100%">
          <Box bg="#f6f6f6" pt={40} px={24}>
            <div style={{ textAlign: "center" }} ref={this.measure}>
              {this.props.children(this.state)}
            </div>
            <Text
              fontSize={1}
              width="100%"
              textAlign="center"
              pt={3}
              pb={4}
              color="#999"
            >
              {this.state.width}
              px
            </Text>
          </Box>
          {/* <Tabs ml={2}>
            <Tab
              onClick={() => this.setState({ activeTab: 0 })}
              borderColor={this.state.activeTab === 0 ? "darker" : "white"}
            >
              Knobs
            </Tab>
            <Tab
              onClick={() => this.setState({ activeTab: 1 })}
              borderColor={this.state.activeTab === 1 ? "blue" : "white"}
            >
              Notes
            </Tab>
          </Tabs> */}
          <Box>
            {this.state.activeTab === 0 &&
              Object.values(this.props.knobs).map(v => this.createKnob(v))}
            {/* {this.state.activeTab === 1 && (
              <Text py={3} px={2}>
                {this.props.notes ? this.props.notes : "Add a note!"}
              </Text>
            )} */}
          </Box>
        </Panel>
      </div>
    );
  }
}

Rhyme.defaultProps = {
  name: "My Element",
  knobs: {}
};

export default Rhyme;
