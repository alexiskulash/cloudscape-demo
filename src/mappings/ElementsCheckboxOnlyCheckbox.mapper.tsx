import { figmaMapping } from "@builder.io/dev-tools/figma";
import { Checkbox } from "@cloudscape-design/components";

figmaMapping({
  componentKey: "3df20007f5244f2d1aff2b95444f7c3dfaf6df58",
  mapper(figma) {
    return (
      <Checkbox
        checked={
          figma.State === "Selected" || figma.State === "Selected disabled"
        }
        indeterminate={
          figma.State === "Indeterminate" ||
          figma.State === "Indeterminate Disabled"
        }
        disabled={
          figma.State === "Disabled" ||
          figma.State === "Selected disabled" ||
          figma.State === "Indeterminate Disabled"
        }
      />
    );
  },
});
