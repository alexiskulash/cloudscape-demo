import { figmaMapping } from "@builder.io/dev-tools/figma";
import { Pagination } from "@cloudscape-design/components";

figmaMapping({
  componentKey: "f2f490468aa94d7b57808494f545a63437905860",
  mapper(figma) {
    return (
      <Pagination
        currentPageIndex={1}
        pagesCount={5}
        openEnd={figma.Type === "Open end"}
        disabled={figma.State === "Disabled"}
      />
    );
  },
});
