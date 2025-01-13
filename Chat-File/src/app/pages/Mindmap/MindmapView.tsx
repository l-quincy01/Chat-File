import React, { useState } from "react";
import { Link } from "react-router";
import TabNavigation from "@/app/local_components/Shared/TabNavigation";
import MarkmapHooks from "./markmap-hooks";
import ExcalidrawCallBack from "./ExcalidrawCallBack";

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

export default function MindmapView() {
  const [tabs, setTabs] = useState<Tab[]>([
    { tabName: "Mindmap", isActive: true },
    { tabName: "Mindmap-Sandbox", isActive: false },
  ]);

  const markdown = `
  # Common Data Structures and Algorithms (DSA) Patterns and LeetCode Practice Problems
  
  ### 1. Prefix Sum Pattern
  
  - **Use**: Query the sum of elements in a subarray efficiently when there are multiple queries.
  - **Example Problems**: [Range Sum Query](https://leetcode.com/problems/range-sum-query-immutable/), [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
  
  \`\`\`python
  # Prefix Sum Example
  nums = [1, 2, 3, 4, 5]
  prefix_sum = [0] * (len(nums) + 1)
  for i in range(len(nums)):
      prefix_sum[i + 1] = prefix_sum[i] + nums[i]
  
  # Query sum of elements from index 1 to 3
  sum_1_to_3 = prefix_sum[4] - prefix_sum[1]
  print(sum_1_to_3)  # Output: 9 (2 + 3 + 4)
  \`\`\`
  `;

  const handleTabClick = (index: number) => {
    setTabs((prevTabs) => handleIsActive(prevTabs, index));
  };

  return (
    <div>
      <TabNavigation
        prop={{
          prevURL: "mind-map",
          prevTitle: "Mindmaps",
          currTitle: "The Catcher",
          tabs,
        }}
        onTabClick={handleTabClick}
      />

      {tabs[0].isActive ? (
        <MarkmapHooks markdown={markdown} />
      ) : (
        <div className="flex h-4/5 w-4/5">
          <ExcalidrawCallBack />
        </div>
      )}
    </div>
  );
}
