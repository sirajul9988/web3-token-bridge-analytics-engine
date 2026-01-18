export function loadBridges() {
  console.log("Loading bridges...");

  return [
    {
      name: "Primary Bridge",
      from: "Ethereum",
      to: "Base",
      feeRate: 0.002
    }
  ];
}
