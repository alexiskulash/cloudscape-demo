import { figmaMapping } from "@builder.io/dev-tools/figma";
import { Link } from "@cloudscape-design/components";

figmaMapping({
  componentKey: "e6e810d9853676d622eef58fc84439a04c2a65f4",
  mapper(figma) {
    return (
      <Link
        variant={
          figma.Type?.toLowerCase() as
            | "primary"
            | "secondary"
            | "info"
            | undefined
        }
        href="#"
      >
        {figma.$findOneByName("✏️ Link text")}
      </Link>
    );
  },
});
