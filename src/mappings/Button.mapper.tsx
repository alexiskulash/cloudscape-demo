import { figmaMapping } from "@builder.io/dev-tools/figma";
import { Button } from "@cloudscape-design/components";

figmaMapping({
  componentKey: "e4a33cb6fca296d8cc5bb870010861552fd2d022",
  mapper(figma) {
    return (
      <Button
        variant={
          figma.Type === "Primary"
            ? "primary"
            : figma.Type === "Secondary"
            ? "normal"
            : figma.Type === "Secondary only icon"
            ? "icon"
            : figma.Type === "Link button"
            ? "link"
            : figma.Type === "Icon"
            ? "icon"
            : figma.Type === "Inline icon"
            ? "inline-icon"
            : "normal"
        }
        disabled={figma.State === "Disabled"}
        loading={figma.State === "Loading"}
      >
        {figma.$findOneByName("✏️ Button text")?.$textContent}
      </Button>
    );
  },
});
