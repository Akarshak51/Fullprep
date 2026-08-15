import { mockDelay } from '../../../shared/services/apiClient.js'

const REPORTS = [
  { id: 'r1', type: 'Bug report', target: 'Problem: Course Schedule', reporter: 'coder_42', status: 'open', createdAt: new Date(Date.now() - 3600_000).toISOString(), description: 'Test case 3 has an ambiguous expected output.' },
  { id: 'r2', type: 'Abuse', target: 'User: coder_991', reporter: 'coder_18', status: 'investigating', createdAt: new Date(Date.now() - 7200_000).toISOString(), description: 'Posting spam links in contest chat.' },
  { id: 'r3', type: 'Content issue', target: 'Learning Path: Beginner DSA', reporter: 'coder_205', status: 'resolved', createdAt: new Date(Date.now() - 90000_000).toISOString(), description: 'Video link for Recursion Basics is broken.' },
]

export async function listReports() {
  return mockDelay(REPORTS, 300)
}

export async function resolveReport(id) {
  return mockDelay({ id, status: 'resolved' }, 350)
}
