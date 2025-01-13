import "katex/dist/katex.min.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeProvider";

import TabNavigation from "@/app/local_components/Shared/TabNavigation";

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
  
  ### 2. Two Pointers Pattern
  
  - **Use**: Optimizes comparisons of elements from different positions, like palindrome checks or pair-sum problems.
  - **Example Problems**: [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/), [Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
  
  \`\`\`python
  def two_sum(numbers, target):
      left, right = 0, len(numbers) - 1
      while left < right:
          current_sum = numbers[left] + numbers[right]
          if current_sum == target:
              return [left + 1, right + 1]
          elif current_sum < target:
              left += 1
          else:
              right -= 1
  \`\`\`
  
  ### 3. Sliding Window Pattern
  
  - **Use**: Finds subarrays or substrings with specific properties, often used to find max or min sums.
  - **Example Problems**: [Maximum Sum of Subarray](https://leetcode.com/problems/maximum-subarray/), [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
  
  \`\`\`python
  def max_sum_subarray(nums, k):
      window_sum = sum(nums[:k])
      max_sum = window_sum
      for i in range(len(nums) - k):
          window_sum += nums[i + k] - nums[i]
          max_sum = max(max_sum, window_sum)
      return max_sum
  \`\`\`
  
  ... (and so on for the rest of the patterns, with each code block starting and ending with \`\`\`)
  `;

  console.log(source);

  const [tabs, setTabs] = useState<Tab[]>([
    { tabName: "Summary", isActive: true },
    { tabName: "Summary Editor", isActive: false },
  ]);

  const handleTabClick = (index: number) => {
    setTabs((prevTabs) => handleIsActive(prevTabs, index));
  };

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

      <div className="flex flex-col gap-y-4 justify-center pt-4">
        <MarkdownPreview
          className="rounded-lg "
          source={source}
          wrapperElement={{
            "data-color-mode": theme,
          }}
        />
      </div>
    </>
  );
}
