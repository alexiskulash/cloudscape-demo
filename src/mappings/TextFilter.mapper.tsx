import { figmaMapping } from "@builder.io/dev-tools/figma";
import { TextFilter } from "@cloudscape-design/components";

figmaMapping({
  componentKey: "4067802c99c825b20198338b38a2f743e8094c71",
  mapper(figma) {
    return (
      <TextFilter
        filteringText={
          figma.Content === "Value"
            ? figma.$children[0]?.$textContent ?? ""
            : ""
        }
        filteringPlaceholder={
          figma.Content === "Placeholder"
            ? figma.$children[0]?.$textContent ?? ""
            : undefined
        }
        disabled={figma.State === "Disabled"}
      />
    );
  },
});
