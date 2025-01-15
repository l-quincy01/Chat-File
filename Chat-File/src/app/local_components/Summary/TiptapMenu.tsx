import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Editor, useCurrentEditor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Strikethrough,
  X,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Undo,
  Redo,
  Palette,
  EllipsisVertical,
} from "lucide-react";
import { useTheme } from "@/app/context/ThemeProvider";

interface props {
  editor: Editor | null;
}

const TiptapMenuBar = ({ editor }: props) => {
  // const { editor } = useCurrentEditor();
  const { theme } = useTheme();

  if (!editor) {
    return null;
  }

  return (
    <div
      className={`flex flex-row gap-x-4 flex-grow p-3  border rounded-xl min-w-fit ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <Bold size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <Italic size={20} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <Heading1 size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <Heading2 size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        <Heading3 size={20} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <List size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <ListOrdered size={20} />
      </button>

      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Undo size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Redo size={20} />
      </button>
      <button>
        <Popover>
          <PopoverTrigger
            asChild
            className="bg-transparent border-none shadow-none p-0"
          >
            <Button variant="outline">
              {" "}
              <EllipsisVertical size={20} />{" "}
            </Button>
          </PopoverTrigger>
          <PopoverContent className=" p-0 border-none min-w-fit">
            <div
              className={`flex flex-row gap-x-4 flex-grow p-3  border rounded-xl min-w-fit ${
                theme === "dark" ? "bg-black" : "bg-white"
              }`}
            >
              <button
                onClick={() => editor.chain().focus().setColor("#958DF1").run()}
                className={
                  editor.isActive("textStyle", { color: "#958DF1" })
                    ? "is-active"
                    : ""
                }
              >
                <Palette size={20} />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={editor.isActive("strike") ? "is-active" : ""}
              >
                <Strikethrough size={20} />
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <X size={20} />
      </button>
    </div>
  );
};

export default TiptapMenuBar;

/**
 *   <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        <Palette size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <Strikethrough size={20} />
      </button>
      
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <X size={20} />
      </button>
 */
