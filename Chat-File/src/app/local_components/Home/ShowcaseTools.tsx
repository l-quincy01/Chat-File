import { ChartPie, WrapText, Files } from "lucide-react";
import { LucideProps } from "lucide-react";

interface ShowcaseToolsProps {
  icon: React.ComponentType<LucideProps>;
  title: string;
  caption: string;
  imgurl: string;
}

const useCases: ShowcaseToolsProps[] = [
  {
    icon: ChartPie,
    title: "Generate Mindmaps",
    caption:
      "Transform your research materials into visual mindmaps, organizing key concepts and ideas in an easily understandable format.",
    imgurl: "https://www.chatpdf.com/_static/cards/avif/researchers.avif",
  },
  {
    icon: Files,
    title: "Multi-File Chat",
    caption:
      "Engage with multiple files at once and gather insights seamlessly across various sources, improving your research efficiency.",
    imgurl: "https://www.chatpdf.com/_static/cards/avif/researchers.avif",
  },
  {
    icon: WrapText,
    title: "Robust Summary and Chat",
    caption:
      "Effortlessly summarize long research documents and engage in real-time chats to clarify concepts, making your research process faster and more interactive.",
    imgurl: "https://www.chatpdf.com/_static/cards/avif/researchers.avif",
  },
];

export default function ShowcaseTools() {
  return (
    <>
      <div className="w-3/4 justify-start">
        <div className="text-2xl font-bold ">Tools</div>
      </div>

      <div className="grid grid-cols-3 gap-2 w-3/4">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="shadow-lg shado p-5 rounded-lg gap-y-2 flex flex-col border"
          >
            <useCase.icon color="blue" size={24} />
            <div className="font-semibold text-lg">{useCase.title}</div>
            <div className="font-light text-md">{useCase.caption}</div>
            <div className="flex justify-center">
              <img src={useCase.imgurl} className="" alt={useCase.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
