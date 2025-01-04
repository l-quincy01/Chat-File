import ShowcaseFormats from "@/app/local_components/Home/ShowcaseFormats";
import ShowcaseTools from "@/app/local_components/Home/ShowcaseTools";
import ShowcaseUseCase from "@/app/local_components/Home/ShowcaseUseCase";
import { AudioLines, ChartPie, Files, Film, WrapText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20 justify-center items-center">
      <div>
        <div className=" font-extrabold text-4xl mt-6">
          Sumarise, Diagram and Chat With Any File Fomat{" "}
        </div>
        <div className="flex flex-col gap-y-2  text-lg font-semibold text-wrap text-center">
          Do More Than Just Chat. Start Generating Ideas, Diagraming and <br />
          Summarising Files In Seconds.
        </div>
      </div>

      <ShowcaseFormats />

      <ShowcaseTools />

      <ShowcaseUseCase />
    </div>
  );
}
