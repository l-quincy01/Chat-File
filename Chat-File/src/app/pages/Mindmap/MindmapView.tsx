import { Link } from "react-router";
import MarkmapHooks from "./markmap-hooks";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MindmapView2 from "./ExcalidrawWrapper";
import ExcalidrawCallBack from "./ExcalidrawCallBack";

export default function MindmapView() {
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

  return (
    <div>
      <div className="pl-8 pb-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to={"/mind-map"}>
                <BreadcrumbLink>Mindmaps</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>[Name of mindmap]</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* <MarkmapHooks markdown={markdown} /> */}
      <div className="h-[1000px] w-[1000px]">
        <ExcalidrawCallBack />
      </div>
    </div>
  );
}
