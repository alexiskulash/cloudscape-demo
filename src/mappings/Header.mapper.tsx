import { figmaMapping } from "@builder.io/dev-tools/figma";
import { Header } from "@cloudscape-design/components";

figmaMapping({
  componentKey: "91a25ad05e5aca3d4bac93c7c0a6b9baada82170",
  mapper(figma) {
    return (
      <Header
        variant={
          figma.Type === "Page" || figma.Type === "Page- dark header"
            ? "h1"
            : "h2"
        }
        description={
          figma.Description
            ? figma.$findOneByName("✏️ Description")?.$textContent
            : undefined
        }
        actions={
          figma["Action stripe"]
            ? figma.$findOneByName("Action stripe")?.$children
            : undefined
        }
        counter={figma.$findOneByName(".Counter (base)")?.$textContent}
        info={figma.$findOneByName("Info")?.$children}
      >
        {figma.$findOneByName("✏️ Title")?.$textContent}
      </Header>
    );
  },
});
