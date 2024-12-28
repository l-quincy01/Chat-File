import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  title: string;
  type: string;
  urlID: string;
}
interface Props {
  data: summaryItems[];
}

export default function SummaryTable({ data }: Props) {
  const [showDelete, setShowDelete] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  useEffect(() => {
    if (selectedItems.length > 0) {
      setShowDelete(true);
    } else {
      setShowDelete(false);
    }
  }, [selectedItems]);

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
            New Summary
            <ListPlus />
          </Button>
        )}
      </div>

      <Table>
        <TableCaption>A list of your summaries.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Summaries</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="w-full">
                <div className="flex flex-row gap-x-4 items-center p-5 rounded-xl">
                  <Checkbox
                    onClick={() => {
                      setIsSelected(!isSelected);
                      setSelectedItems((prev) => [...prev, index]);
                    }}
                  />
                  <Link to={`/summary/${item.urlID}`}>
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
