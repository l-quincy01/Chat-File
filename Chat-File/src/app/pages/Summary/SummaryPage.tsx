import ResourceTable from "@/app/local_components/Shared/ResourceTable";

export default function SummaryPage() {
  const dummyData = [
    {
      resourceID: "id011",
      title: "The Great Gatsby",
      type: "General Summary",
      url: "gatsby",
    },
    {
      resourceID: "id019",
      title: "The Catcher in the Rye",
      type: "Terms and Definitions",
      url: "catcher",
    },
    {
      resourceID: "id017979",
      title: "To Kill a Mockingbird",
      type: "Descriptive Summary",
      url: "mockingbird",
    },
  ];

  return (
    <div className="p-12">
      <ResourceTable heading="Summary" data={dummyData} />
    </div>
  );
}
