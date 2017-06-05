// import the modules we require
var agentCalc = require("./agentCalculationsModule");

console.log("The commission earned this month by the agent is: - £" + agentCalc.commission(10000, 10));
console.log();
console.log("The bonus earned this month by the agent is: - £" + agentCalc.bonus(10000));