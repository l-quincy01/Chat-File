import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListPlus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

interface summaryItems {
  resourceID: string;
  title: string;
  type: string;
  url: string;
}

interface Props {
  heading: string;
  data: summaryItems[];
}

export default function ResourceTable({ heading, data }: Props) {
  const [showDelete, setShowDelete] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    console.log("USE EFFECT WORKING");

    setShowDelete(selectedItems.length > 0);
  }, [selectedItems]);

  const handleSelectedItems = (resourceID: string) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(resourceID)) {
        return prevSelected.filter((item) => item !== resourceID);
      } else {
        return [...prevSelected, resourceID];
      }
    });
  };

  return (
    <>
      <div className="flex items-center justify-end">
        {showDelete ? (
          <Button>
            Delete
            <Trash color="red" />
          </Button>
        ) : (
          <Button>
            New {heading}
            <ListPlus />
          </Button>
        )}
      </div>

      <Table>
        <TableCaption>
          A list of your {heading === "Summary" ? "Summaries" : "Mind-maps"}.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead> {heading} </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="w-full">
                <div className="flex flex-row gap-x-4 items-center p-5 rounded-xl">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    onChange={() => handleSelectedItems(item.resourceID)}
                    checked={selectedItems.includes(item.resourceID)}
                  />
                  <Link to={`/summary/${item.url}`}>
                    {item.type}:{item.title}
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
