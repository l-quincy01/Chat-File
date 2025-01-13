import ResourceTable from "@/app/local_components/Shared/ResourceTable";

export default function MindmapPage() {
  const dummyData = [
    {
      resourceID: "id011",
      title: "The Great Gatsby",
      type: "General Summary",
      url: "gatsby",
    },
    {
      resourceID: "id012",
      title: "The Catcher in the Rye",
      type: "Terms and Definitions",
      url: "catcher",
    },
    {
      resourceID: "id013",
      title: "To Kill a Mockingbird",
      type: "Descriptive Summary",
      url: "mockingbird",
    },
  ];

  return <ResourceTable heading="Mind-Map" data={dummyData} />;
}
