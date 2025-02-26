import { figmaMapping } from "@builder.io/dev-tools/figma";
import { HelpPanel } from "@cloudscape-design/components";

figmaMapping({
  componentKey: "be7139eb80e5df7d3d81daee698541f17963ead1",
  mapper(figma) {
    return (
      <HelpPanel loading={figma.State === "Loading"} loadingText="Loading...">
        {figma.$children}
      </HelpPanel>
    );
  },
});
