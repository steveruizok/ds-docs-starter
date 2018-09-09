import Rhyme from "../components/Rhyme";
import {
  Text,
  Box,
  Button,
  ButtonCircle,
  ButtonOutline,
  ButtonTransparent
} from "rebass";

const knobsA = {
  myText: {
    type: "text",
    label: "Name",
    default: "Steve"
  },
  myDate: {
    type: "date",
    label: "Date",
    min: "1986-01-01",
    max: "1986-01-11",
    default: "1986-01-09"
  },
  myNumber: {
    type: "number",
    label: "Age",
    default: 32,
    min: 1,
    max: 100
  },
  myBoolean: {
    type: "boolean",
    label: "Dark Mode",
    default: false
  },
  myEnum: {
    type: "enum",
    label: "Favorite Color",
    options: ["#f98c5f", "#86d7dd", "#c2e988"],
    labels: ["Red", "Blue", "Green"],
    default: "#f98c5f"
  },
  myColor: {
    type: "color",
    label: "Text Color",
    default: "#e1547c"
  },
  mySegment: {
    type: "segment",
    label: "Alignment",
    options: ["left", "center", "right"],
    labels: ["Left", "Center", "Right"],
    default: "left"
  },
  hidden: {
    type: "boolean",
    label: "Light mode only",
    default: false,
    hidden: s => s.myBoolean
  },
  revealed: {
    type: "boolean",
    label: "Dark mode only",
    default: false,
    hidden: s => !s.myBoolean
  },
  myTextarea: {
    name: "myTextarea",
    type: "textarea",
    label: "Message",
    default: ""
  }
};

export const RhymeA = props => (
  <Rhyme {...props} knobs={knobsA}>
    {state => {
      return (
        <Box color={state.myColor} bg={state.myBoolean ? "#333" : "#FFF"}>
          <Text textAlign={state.mySegment}>
            Hi, I'm {state.myText}. I'm {state.myNumber} years old. I was born
            on{" "}
            {new Date(state.myDate).toLocaleDateString("en-gb", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
            .
          </Text>
          <Text textAlign={state.mySegment} color={state.myEnum}>
            This is my favourite color.
          </Text>
          {state.myTextarea && (
            <Text py={16} textAlign={state.mySegment}>
              <Text>Dear diary,</Text>
              <Text my={3}>{state.myTextarea}</Text>
              <Text>Yours truly,</Text>
              <Text>{state.myText}</Text>
            </Text>
          )}
        </Box>
      );
    }}
  </Rhyme>
);

const knobsB = {
  label: {
    type: "text",
    label: "Label",
    default: "Get started!"
  },
  buttonType: {
    type: "enum",
    label: "Button Type",
    options: ["default", "circle", "outline", "transparent"],
    labels: ["Default", "Circle", "Outline", "Transparent"],
    default: 1
  }
};

export const RhymeB = props => (
  <Rhyme {...props} knobs={knobsB}>
    {state => {
      let ButtonType;
      switch (state.buttonType) {
        case "circle":
          ButtonType = ButtonCircle;
          break;
        case "outline":
          ButtonType = ButtonOutline;
          break;
        case "transparent":
          ButtonType = ButtonTransparent;
          break;
        default:
          ButtonType = Button;
      }

      return <ButtonType>{state.label}</ButtonType>;
    }}
  </Rhyme>
);

export const RhymeC = props => (
  <Rhyme {...props}>
    {state => {
      return (
        <Box bg="#fff" width="100%">
          Hello world
        </Box>
      );
    }}
  </Rhyme>
);
