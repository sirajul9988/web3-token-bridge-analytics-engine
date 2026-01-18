export function analyzePerformance(transfer) {
  const speed = Math.random() > 0.5 ? "Fast" : "Normal";

  return {
    txHash: transfer.txHash,
    speed,
    success: true
  };
}
