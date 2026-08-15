import { mockDelay } from '../../../shared/services/apiClient.js'

// Mirrors POST /ai/hint, /ai/debug, /ai/complexity, /ai/explain, /ai/chat from the API plan.
// Responses are scoped/staged on purpose — see product roadmap "AI Study Partner" guardrails.

export async function getHint(problem, stage = 1) {
  const hints = [
    'Think about what information you need to "remember" as you scan the array once.',
    'A hash map lets you check whether a complement value has already been seen in O(1).',
    'For each number, check if (target - number) is already a key in your map before inserting the current number.',
  ]
  return mockDelay({ stage, hint: hints[Math.min(stage - 1, hints.length - 1)], hasMore: stage < hints.length }, 700)
}

export async function debugCode(code) {
  const issue = /return/.test(code)
    ? 'Your logic looks structurally sound. Double check the edge case where the array has duplicate values mapping to the same complement.'
    : 'Your function doesn\'t return a value yet — walk through what should happen once you find a matching pair in the map.'
  return mockDelay({ issue }, 900)
}

export async function analyzeComplexity(code) {
  return mockDelay({
    time: 'O(n)',
    space: 'O(n)',
    explanation: 'A single pass through the array with O(1) hash map lookups gives linear time; the map itself can hold up to n entries.',
  }, 800)
}

export async function explainCode(code) {
  return mockDelay({
    explanation: 'This walks through each number once, checking a hash map for the value needed to reach the target before storing the current number for future lookups.',
  }, 800)
}

export async function sendChatMessage(message, history = []) {
  await mockDelay(null, 700)
  const replies = [
    'Good question — try tracing through the first example by hand before writing code.',
    'That approach would work but costs O(n²) time. Can you think of a way to trade space for speed?',
    'You\'re close. What happens if the same value appears twice in the array?',
  ]
  return { role: 'assistant', content: replies[history.length % replies.length] }
}
