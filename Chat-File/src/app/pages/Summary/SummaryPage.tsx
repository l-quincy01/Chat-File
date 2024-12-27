import SummaryTable from "@/app/local_components/Summary/SummaryTable";

export default function SummaryPage() {
  const dummyData = [
    {
      title: "The Great Gatsby",
      type: "General Summary",
      urlID: "gatsby",
    },
    {
      title: "The Catcher in the Rye",
      type: "Terms and Definitions",
      urlID: "catcher",
    },
    {
      title: "To Kill a Mockingbird",
      type: "Descriptive Summary",
      urlID: "mockingbird",
    },
  ];

  return (
    <div className="p-12">
      <SummaryTable data={dummyData} />
    </div>
  );
}
