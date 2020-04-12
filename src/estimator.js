const covid19ImpactEstimator = (data) => {

// const impact = {};
// const severeImpact = {};

const currentlyInfected = data.reportedCases * 10;
const svrcurrentlyInfected = data.reportedCases * 50;
const totalBed = data.totalHospitalBeds;
cosnt avgIncome = data.region.avgDailyIncomeInUSD;
const avgIncPop = data.region.avgDailyIncomePopulation;

let days;
let dollarsInFlight;
let svrDollarsInFlight;
if ( data.periodType === "days" ) {
    days = data.timeToElapse;
}
else if ( data.periodType === "weeks" ) {
    days = data.timeToElapse * 7;
}
else if ( data.periodType === "months") {
    days = data.timeToElapse * 30;
}
 
}
export default covid19ImpactEstimator;
