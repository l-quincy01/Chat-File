import React, { useState, useRef, useEffect } from "react";
import { Markmap } from "markmap-view";
import { transformer } from "./Markmap";
import { Toolbar } from "markmap-toolbar";
import "markmap-toolbar/dist/style.css";

interface markdownProps {
  markdown: string;
}

function renderToolbar(mm: Markmap, wrapper: HTMLElement) {
  while (wrapper?.firstChild) wrapper.firstChild.remove();
  if (mm && wrapper) {
    const toolbar = new Toolbar();
    toolbar.attach(mm);
    // Register custom buttons
    toolbar.register({
      id: "alert",
      title: "Click to show an alert",
      content: "Alert",
      onClick: () => alert("You made it!"),
    });
    toolbar.setItems([...Toolbar.defaultItems, "alert"]);
    wrapper.append(toolbar.render());
  }
}

export default function MarkmapHooks({ markdown }: markdownProps) {
  const [value, setValue] = useState(markdown);
  // Ref for SVG element
  const refSvg = useRef<SVGSVGElement>();
  // Ref for markmap object
  const refMm = useRef<Markmap>();
  // Ref for toolbar wrapper
  const refToolbar = useRef<HTMLDivElement>();

  useEffect(() => {
    // Create markmap and save to refMm
    if (refMm.current) return;
    const mm = Markmap.create(refSvg.current);
    console.log("create", refSvg.current);
    refMm.current = mm;
    renderToolbar(refMm.current, refToolbar.current);
  }, [refSvg.current]);

  useEffect(() => {
    // Update data for markmap once value is changed
    const mm = refMm.current;
    if (!mm) return;
    const { root } = transformer.transform(value);
    mm.setData(root);
    mm.fit();
  }, [refMm.current, value]);

  return (
    <React.Fragment>
      <div className="flex-1"></div>
      <svg className="flex-1 w-screen h-screen" ref={refSvg} />
      <div className="absolute bottom-1 right-1" ref={refToolbar}></div>
    </React.Fragment>
  );
}
