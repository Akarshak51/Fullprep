import { mockDelay } from '../../../shared/services/apiClient.js'

const TOPICS = ['Array', 'Hash Table', 'String', 'Dynamic Programming', 'Graph', 'Tree', 'Two Pointers', 'Binary Search', 'Greedy', 'Heap']

function generateProblems() {
  const titles = [
    'Two Sum', 'Add Two Numbers', 'Longest Substring Without Repeating Characters', 'Median of Two Sorted Arrays',
    'Longest Palindromic Substring', 'Container With Most Water', '3Sum', 'Letter Combinations of a Phone Number',
    'Remove Nth Node From End of List', 'Valid Parentheses', 'Merge Two Sorted Lists', 'Generate Parentheses',
    'Merge k Sorted Lists', 'Next Permutation', 'Search in Rotated Sorted Array', 'Combination Sum',
    'Trapping Rain Water', 'Permutations', 'Rotate Image', 'Group Anagrams', 'Maximum Subarray', 'Jump Game',
    'Merge Intervals', 'Unique Paths', 'Minimum Path Sum', 'Climbing Stairs', 'Edit Distance', 'Sort Colors',
    'Minimum Window Substring', 'Subsets', 'Word Search', 'Largest Rectangle in Histogram', 'Maximal Rectangle',
    'Decode Ways', 'Validate Binary Search Tree', 'Symmetric Tree', 'Binary Tree Level Order Traversal',
    'Maximum Depth of Binary Tree', 'Construct Binary Tree from Preorder and Inorder Traversal', 'Flatten Binary Tree to Linked List',
    'Best Time to Buy and Sell Stock', 'Binary Tree Maximum Path Sum', 'Valid Palindrome', 'Word Ladder',
    'Longest Consecutive Sequence', 'Single Number', 'Course Schedule', 'Implement Trie', 'House Robber',
    'Number of Islands', 'Reverse Linked List', 'Course Schedule II', 'Kth Largest Element in an Array',
    'Combination Sum III', 'Contains Duplicate', 'Invert Binary Tree', 'Kth Smallest Element in a BST',
    'Lowest Common Ancestor of a Binary Search Tree', 'Delete Node in a BST', 'Product of Array Except Self',
    'Sliding Window Maximum', 'Search a 2D Matrix II', 'LRU Cache', 'Meeting Rooms II', 'Alien Dictionary',
    'Coin Change', 'Longest Increasing Subsequence', 'Russian Doll Envelopes', 'Maximum Product Subarray',
    'Word Break', 'Linked List Cycle', 'Find Minimum in Rotated Sorted Array', 'Min Stack',
    'Intersection of Two Linked Lists', 'Majority Element', 'House Robber II', 'Number of Provinces',
    'Reverse Bits', 'Number of 1 Bits', 'Happy Number', 'Remove Linked List Elements', 'Count Primes',
    'Isomorphic Strings', 'Reverse Linked List II', 'Course Schedule III', 'Palindrome Linked List',
    'Lowest Common Ancestor of a Binary Tree', 'Delete Node in a Linked List', 'Product Sales Analysis',
    'Implement Queue using Stacks', 'Summary Ranges', 'Ugly Number', 'Ugly Number II', 'Missing Number',
    'Median of a Row Wise Sorted Matrix', 'Serialize and Deserialize Binary Tree', 'Longest Increasing Path in a Matrix',
    'Bulb Switcher', 'Zigzag Iterator', 'Nested List Weight Sum', 'Design Hit Counter', 'Guess Number Higher or Lower',
  ]
  const difficulties = ['Easy', 'Medium', 'Hard']
  return titles.map((title, i) => {
    const difficulty = difficulties[i % 7 === 0 ? 2 : i % 3 === 0 ? 1 : 0]
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const tags = [TOPICS[i % TOPICS.length], TOPICS[(i + 3) % TOPICS.length]]
    return {
      id: `p_${i + 1}`,
      slug,
      title,
      difficulty,
      tags,
      acceptanceRate: Math.round(30 + ((i * 37) % 55)),
      solved: i % 4 === 0,
      isPremium: i % 17 === 0,
      likes: 100 + ((i * 53) % 4000),
    }
  })
}

const PROBLEMS = generateProblems()

export async function listProblems({ search = '', difficulty = 'All', tag = 'All', status = 'All' } = {}) {
  let results = PROBLEMS
  if (search) results = results.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
  if (difficulty !== 'All') results = results.filter((p) => p.difficulty === difficulty)
  if (tag !== 'All') results = results.filter((p) => p.tags.includes(tag))
  if (status === 'Solved') results = results.filter((p) => p.solved)
  if (status === 'Unsolved') results = results.filter((p) => !p.solved)
  return mockDelay(results, 300)
}

export async function getAllTags() {
  return mockDelay(TOPICS, 100)
}

const EXAMPLES = [
  { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' },
  { input: 'nums = [3,2,4], target = 6', output: '[1,2]', explanation: null },
]

export async function getProblemBySlug(slug) {
  const base = PROBLEMS.find((p) => p.slug === slug) || PROBLEMS[0]
  const detail = {
    ...base,
    statement: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.`,
    examples: EXAMPLES,
    constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9', 'Only one valid answer exists.'],
    starterCode: {
      javascript: `/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nfunction solve(nums, target) {\n  \n}`,
      python: `class Solution:\n    def solve(self, nums, target):\n        pass`,
      java: `class Solution {\n    public int[] solve(int[] nums, int target) {\n        \n    }\n}`,
      cpp: `class Solution {\npublic:\n    vector<int> solve(vector<int>& nums, int target) {\n        \n    }\n};`,
    },
    submissionCount: 8_400_000,
    acceptedCount: Math.round(8_400_000 * (base.acceptanceRate / 100)),
    editorial: 'A hash map lets you check for the complement of the current number in O(1), turning an O(n²) brute force into a single O(n) pass.',
  }
  return mockDelay(detail, 350)
}
