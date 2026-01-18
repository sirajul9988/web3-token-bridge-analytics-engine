export function generateReport(transfer, performance) {
  console.log("----- Bridge Analytics Report -----");
  console.log("Bridge:", transfer.bridge);
  console.log("From:", transfer.fromChain);
  console.log("To:", transfer.toChain);
  console.log("Token:", transfer.token);
  console.log("Amount:", transfer.amount);
  console.log("Fee:", transfer.fee);
  console.log("Speed:", performance.speed);
  console.log("Success:", performance.success);
  console.log("----------------------------------");
}
