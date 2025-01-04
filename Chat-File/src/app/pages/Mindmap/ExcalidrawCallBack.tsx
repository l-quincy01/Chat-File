import { useState, useDeferredValue } from "react";
import { parseMermaid } from "@excalidraw/mermaid-to-excalidraw/dist/parseMermaid";
import ExcalidrawWrapper from "./ExcalidrawWrapper";

export interface MermaidData {
  definition: string;
  output: Awaited<ReturnType<typeof parseMermaid>> | null;
  error: string | null;
}

export default function ExcalidrawCallBack() {
  // Fixed Mermaid definition
  const fixedDefinition = `flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]`;

  const [mermaidData, setMermaidData] = useState<MermaidData>({
    definition: fixedDefinition,
    error: null,
    output: null,
  });

  const deferredMermaidData = useDeferredValue(mermaidData);

  // Parse the fixed definition on initialization
  useState(() => {
    (async () => {
      try {
        const mermaid = await parseMermaid(fixedDefinition);
        setMermaidData((prev) => ({
          ...prev,
          output: mermaid,
        }));
      } catch (error) {
        setMermaidData((prev) => ({
          ...prev,
          error: String(error),
        }));
      }
    })();
  });

  return (
    <div className="h-screen w-screen">
      <ExcalidrawWrapper
        mermaidDefinition={deferredMermaidData.definition}
        mermaidOutput={deferredMermaidData.output}
      />
    </div>
  );
}
