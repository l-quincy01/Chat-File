import "katex/dist/katex.min.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeProvider";

import TabNavigation from "@/app/local_components/Shared/TabNavigation";
import Tiptap from "@/app/local_components/Summary/Tiptap";

interface Tab {
  tabName: string;
  isActive: boolean;
}
const handleIsActive = (tabs: Tab[], index: number): Tab[] => {
  return tabs.map((tabItem, i) => ({
    ...tabItem,
    isActive: i === index,
  }));
};

export default function SummaryView() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", theme);
  }, [theme]);

  const source = `
  
  # Common Data Structures and Algorithms (DSA) Patterns and LeetCode Practice Problems
  
  ### 1. Prefix Sum Pattern
  
  - **Use**: Query the sum of elements in a subarray efficiently when there are multiple queries.
  - **Example Problems**: [Range Sum Query](https://leetcode.com/problems/range-sum-query-immutable/), [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
  

  `;

  const [tabs, setTabs] = useState<Tab[]>([
    { tabName: "Summary", isActive: true },
    { tabName: "Summary-Editor", isActive: false },
  ]);

  const handleTabClick = (index: number) => {
    setTabs((prevTabs) => handleIsActive(prevTabs, index));
  };

  console.log(tabs[0].isActive);
  console.log(tabs[0].tabName);

  return (
    <>
      <TabNavigation
        prop={{
          prevURL: "summary",
          prevTitle: "Summary",
          currTitle: "The Catcher",
          tabs,
        }}
        onTabClick={handleTabClick}
      />

      {tabs[0].isActive ? (
        <div className="flex flex-col gap-y-4 justify-center pt-4">
          <MarkdownPreview
            className="rounded-lg "
            source={source}
            wrapperElement={{
              "data-color-mode": theme,
            }}
          />
        </div>
      ) : (
        <div>
          <Tiptap />
        </div>
      )}
    </>
  );
}
