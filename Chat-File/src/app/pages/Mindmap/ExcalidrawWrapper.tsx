import {
  Excalidraw,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";
// import { parseMermaidToExcalidraw } from "@excalidraw/mermaid-to-excalidraw";
import type { MermaidData } from "./ExcalidrawCallBack";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types.js";

import { graphToExcalidraw } from "@excalidraw/mermaid-to-excalidraw/dist/graphToExcalidraw";
import { useEffect, useState } from "react";
import { useTheme } from "@/app/context/ThemeProvider";

interface ExcalidrawWrapperProps {
  mermaidDefinition: MermaidData["definition"];
  mermaidOutput: MermaidData["output"];
}

export default function ExcalidrawWrapper({
  mermaidDefinition,
  mermaidOutput,
}: ExcalidrawWrapperProps) {
  const { theme } = useTheme();

  const DEFAULT_FONT_SIZE = 10;

  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);

  useEffect(() => {
    if (!excalidrawAPI) {
      return;
    }

    if (mermaidDefinition === "" || mermaidOutput === null) {
      excalidrawAPI.resetScene();
      return;
    }

    const { elements, files } = graphToExcalidraw(mermaidOutput, {
      fontSize: DEFAULT_FONT_SIZE,
    });

    excalidrawAPI.updateScene({
      elements: convertToExcalidrawElements(elements),
    });
    excalidrawAPI.scrollToContent(excalidrawAPI.getSceneElements(), {
      fitToContent: true,
    });

    if (files) {
      excalidrawAPI.addFiles(Object.values(files));
    }
  }, [mermaidDefinition, mermaidOutput]);

  return (
    <Excalidraw
      autoFocus={true}
      theme={theme === "dark" ? "dark" : "light"}
      initialData={{
        appState: {
          viewBackgroundColor: "#fafafa",
          currentItemFontFamily: 1,
        },
      }}
      excalidrawAPI={(api) => setExcalidrawAPI(api)}
    />
  );
}
