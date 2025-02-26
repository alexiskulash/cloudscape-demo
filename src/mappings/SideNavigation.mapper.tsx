import { figmaMapping } from "@builder.io/dev-tools/figma";
import { SideNavigation } from "@cloudscape-design/components";

figmaMapping({
  componentKey: "753b0ad5cc2026910bbdce2c26625150fcbb4506",
  mapper(figma) {
    return <SideNavigation itemsControl={figma.$children} />;
  },
});
