export function simulateTransfer(bridge, token, amount) {
  console.log("Simulating cross-chain transfer...");

  const fee = amount * bridge.feeRate;

  return {
    bridge: bridge.name,
    fromChain: bridge.from,
    toChain: bridge.to,
    token,
    amount,
    fee: fee.toFixed(2),
    txHash: "0xBRIDGEANALYTICS001"
  };
}
