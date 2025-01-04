import img1 from "../../assets/Images/Home/1.webp";
import img2 from "../../assets/Images/Home/2.webp";
import img3 from "../../assets/Images/Home/3.webp";
import img4 from "../../assets/Images/Home/4.webp";

interface UseCase {
  title: string;
  description: string;
  imgUrl: string;
  imgPosition: "left" | "right";
}

const useCases: UseCase[] = [
  {
    title: "Students & Researchers",
    description:
      "Transform your lecture notes or research papers into structured visualizations. ProductName helps you connect ideas and generate flowcharts to simplify complex theories.",
    imgUrl: img1,
    imgPosition: "right",
  },
  {
    title: "Educators & Trainers",
    description:
      "Streamline your teaching process by visualizing lesson plans and course materials. ProductName organizes content into easy-to-follow diagrams for enhanced learning.",
    imgUrl: img3,
    imgPosition: "left",
  },
  {
    title: "Business & Technology Professionals",
    description:
      "Visualize workflows, map strategies, and organize projects with ease. ProductName enhances efficiency with clear, interactive models.",
    imgUrl: img4,
    imgPosition: "right",
  },
  {
    title: "Content Creators",
    description:
      "Outline and map content ideas visually for easier planning. ProductName supports the organization of articles, videos, and blogs by breaking down concepts into digestible formats.",
    imgUrl: img2,
    imgPosition: "left",
  },
];

export default function ShowcaseUseCase() {
  return (
    <>
      <div className="w-3/4 justify-start">
        <div className="text-2xl font-bold ">Use Cases</div>
      </div>
      <div className="flex items-center justify-center flex-col gap-y-20">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className={`flex flex-row gap-x-4 w-3/4 ${
              useCase.imgPosition === "left" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col gap-y-2">
              <div className="font-semibold text-lg">{useCase.title}</div>
              <div className="font-light">{useCase.description}</div>
            </div>
            <div>
              <img
                className="rounded-lg"
                src={useCase.imgUrl}
                alt={useCase.title}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

//   {
//     title: "Business Analysts",
//     description:
//       "Create clear, concise visual models to map out business processes and workflows. MyMap supports analyzing and improving organizational strategies with easy-to-understand diagrams.",
//     imgUrl: "https://files.mymap.ai/public/v/website-business-analyst.webp",
//     imgPosition: "right",
//   },
//   {
//     title: "Project Managers",
//     description:
//       "Manage complex projects by visualizing tasks, timelines, and dependencies. MyMap allows you to create actionable flowcharts to monitor progress and identify potential bottlenecks.",
//     imgUrl: "https://files.mymap.ai/public/v/website-project-manager.webp",
//     imgPosition: "left",
//   },
//   {
//     title: "Software Developers",
//     description:
//       "Organize and structure your code logic visually. MyMap can help developers create flowcharts and UML diagrams to better plan and understand complex systems.",
//     imgUrl: "https://files.mymap.ai/public/v/website-software-developer.webp",
//     imgPosition: "right",
//   },
