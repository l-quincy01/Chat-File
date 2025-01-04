import {
  AudioLines,
  ChartPie,
  Files,
  Film,
  WrapText,
  FileChartPie,
} from "lucide-react";
import { LucideProps } from "lucide-react";

interface Props {
  icon: React.ComponentType<LucideProps>;
  title: string;
  caption: string;
}
const data: Props[] = [
  {
    icon: AudioLines,
    title: "Audio",
    caption: "Summarize audio to save time and focus on key points.",
  },
  {
    icon: Film,
    title: "Video",
    caption: "Generate quick video summaries for key insights.",
  },
  {
    icon: Files,
    title: "Docs",
    caption: "Supports all popular document formats.",
  },
  {
    icon: FileChartPie,
    title: "Record",
    caption: "Record audio and extract key summaries easily.",
  },
];

export default function ShowcaseFormats() {
  return (
    <>
      <div className="w-3/4 justify-start">
        <div className="text-2xl font-bold ">Supports Various File Formats</div>
      </div>
      <div className="grid grid-cols-2 gap-2 w-3/4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col w-3/4 ">
            <item.icon size={48} />
            <div className="text-xl font-semibold mt-3">{item.title}</div>

            <div className="text-md font-normal">{item.caption}</div>
          </div>
        ))}
      </div>
    </>
  );
}
