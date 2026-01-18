import { connectRPC } from "./rpc.client.js";
import { loadBridges } from "./bridge.registry.js";
import { simulateTransfer } from "./transfer.engine.js";
import { analyzePerformance } from "./performance.analyzer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Token Bridge Analytics Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const bridges = loadBridges();

const transfer = simulateTransfer(bridges[0], "TOKEN_X", 750);
const performance = analyzePerformance(transfer);

generateReport(transfer, performance);
