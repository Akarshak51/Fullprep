const STATUS_BY_JUDGE_ID = Object.freeze({
  3: "Accepted",
  4: "Wrong Answer",
  5: "Time Limit Exceeded",
  6: "Compilation Error",
  7: "Runtime Error",
  8: "Runtime Error",
  9: "Runtime Error",
  10: "Internal Error",
  11: "Runtime Error",
  12: "Internal Error",
  13: "Internal Error",
});

export function verdictForResults(results) {
  if (!results?.length) return { status: "Internal Error", passed: 0, total: 0, timeMs: null, memoryKb: null };

  const passed = results.filter((result) => result.status?.id === 3).length;
  const firstFailure = results.find((result) => result.status?.id !== 3);
  const status = firstFailure ? (STATUS_BY_JUDGE_ID[firstFailure.status?.id] || "Internal Error") : "Accepted";

  const times = results.map((r) => Number.parseFloat(r.time)).filter(Number.isFinite);
  const memories = results.map((r) => Number(r.memory)).filter(Number.isFinite);

  return {
    status,
    passed,
    total: results.length,
    timeMs: times.length ? Math.max(...times) * 1000 : null,
    memoryKb: memories.length ? Math.max(...memories) : null,
    judgeStatusId: firstFailure?.status?.id || 3,
  };
}

export function serializeResults(results) {
  return results.map((result, index) => ({
    testCase: index + 1,
    passed: result.status?.id === 3,
    status: result.status?.description || "Unknown",
    stdout: result.stdout ?? null,
    stderr: result.stderr ?? null,
    compileOutput: result.compile_output ?? null,
    runtimeMs: Number.isFinite(Number.parseFloat(result.time)) ? Number.parseFloat(result.time) * 1000 : null,
    memoryKb: Number.isFinite(Number(result.memory)) ? Number(result.memory) : null,
  }));
}
