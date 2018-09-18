import ShortStory from "short-story";
import { Box, Card } from "rebass";

export default ({ colors, typography }) => {
  const typeLabels = Object.keys(typography);
  return (
    <ShortStory
      name=""
      knobs={{
        background: {
          label: "Background",
          type: "enum",
          options: Object.values(colors),
          labels: Object.keys(colors),
          default: colors.white
        },
        foreground: {
          label: "Foreground",
          type: "enum",
          options: Object.values(colors),
          labels: Object.keys(colors),
          default: colors.black
        },
        style: {
          label: "Style",
          type: "enum",
          options: typeLabels,
          labels: typeLabels,
          default: typeLabels[typeLabels.length - 1]
        },
        text: {
          type: "textarea",
          label: "Text",
          default:
            "A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent"
        }
      }}
    >
      {state => {
        let Component = typography[state.style];
        return (
          <Card mb={4} bg="#eceeef">
            <Box
              mx={2}
              mt={2}
              mb={3}
              color={state.foreground}
              bg={state.background}
            >
              <Component>{state.text}</Component>
            </Box>
          </Card>
        );
      }}
    </ShortStory>
  );
};
