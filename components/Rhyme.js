import {
  Panel,
  Tabs,
  Pre,
  Code,
  Tab,
  Textarea,
  Text,
  Switch,
  Heading,
  Button,
  ButtonOutline,
  Small,
  Slider,
  Group,
  Flex,
  Box,
  Label,
  Input,
  Select,
  Checkbox
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

    const change = ev => {
      this.setState({ [knob.name]: ev.target.value });
    };

    const handleChange = throttle(change, 150);

    const defaultValue = this.state[knob.name];

    switch (knob.type) {
      // TEXT
      case "text":
        return (
          <Input
            key={key}
            onChange={handleChange}
            defaultValue={defaultValue}
          />
        );
      // TEXTAREA
      case "textarea":
        return (
          <Textarea
            key={key}
            onChange={handleChange}
            defaultValue={defaultValue}
          />
        );
      // NUMBER
      case "number":
        return [
          <Text key={key + "_slider_currentValue"} textAlign="center">
            <Small key={key + "_slider_max"}>{defaultValue}</Small>
          </Text>,
          <Slider
            key={key}
            min={knob.min}
            max={knob.max}
            onChange={handleChange}
            defaultValue={defaultValue}
          />,
          <Flex key={key + "_slider_values"} justifyContent="space-between">
            <Small key={key + "_slider_min"}>{knob.min}</Small>
            <Small key={key + "_slider_max"}>{knob.max}</Small>
          </Flex>
        ];
      // ENUMERATED VALUE
      case "enum":
        return (
          <Select key={key} onChange={handleChange} defaultValue={defaultValue}>
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
          <Group key={key}>
            {knob.options.map((o, index) => {
              {
                let Type = ButtonOutline;
                if (defaultValue === o) {
                  Type = Button;
                }
                return (
                  <Type
                    ml={"-2px"}
                    key={key + "_option_" + index}
                    onClick={ev => {
                      this.setState({ [knob.name]: o });
                    }}
                    children={knob.labels[index]}
                  />
                );
              }
            })}
          </Group>
        );
      // BOOLEAN
      case "boolean":
        return (
          <Switch
            key={key}
            onClick={ev => {
              this.setState({ [knob.name]: !defaultValue });
            }}
            checked={defaultValue}
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
            value={defaultValue}
          />
        ];
      // TODO: IMAGE
      // TODO: DATE
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
        <Panel width="100%">
          <Panel.Header>
            <Flex alignItems="center" justifyContent="space-between">
              <Heading fontSize="4">{this.props.name}</Heading>
            </Flex>
          </Panel.Header>
          <Box bg="#eeeeee" pt={40} px={24}>
            <div style={{ textAlign: "center" }} ref={this.measure}>
              {this.props.children(this.state)}
            </div>
            <Text
              fontSize={1}
              width="100%"
              textAlign="center"
              pt={3}
              pb={4}
              color="#777"
            >
              {this.state.width}
              px
            </Text>
          </Box>
          <Tabs ml={2}>
            <Tab
              onClick={() => this.setState({ activeTab: 0 })}
              borderColor={this.state.activeTab === 0 ? "blue" : "white"}
            >
              Knobs
            </Tab>
            <Tab
              onClick={() => this.setState({ activeTab: 1 })}
              borderColor={this.state.activeTab === 1 ? "blue" : "white"}
            >
              Notes
            </Tab>
          </Tabs>
          <Box>
            {this.state.activeTab === 0 &&
              Object.values(this.props.knobs).map(v => this.createKnob(v))}
            {this.state.activeTab === 1 && (
              <Text py={3} px={2}>
                {this.props.notes ? this.props.notes : "Add a note!"}
              </Text>
            )}
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
