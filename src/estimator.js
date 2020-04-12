const covid19ImpactEstimator = (data) => {

    const currentlyInfected = data.reportedCases * 10;
    const svrcurrentlyInfected = data.reportedCases * 50;
    const totalBed = data.totalHospitalBeds;
    cosnt avgIncome = data.region.avgDailyIncomeInUSD;
    const avgIncPop = data.region.avgDailyIncomePopulation;

    let Numdays = data.timeToElapse;
    let dollarsInFlight;
    let svrDollarsInFlight;
    if (data.periodType === "days") {
        Numdays;
    }
    else if (data.periodType === "weeks") {
        Numdays *= 7;
    }
    else if (data.periodType === "months") {
        Numdays *= 30;
    }

    const infectionsByRequestedTime = currentlyInfected * (2 ** Math.floor(numDays / 3));

    const svrInfectionsByRequestedTime = svrCurrentlyInfected * (2** Math.floor(numDays / 3));

    const severeCasesByRequestedTime = Math.floor(0.15 * infectionsByRequestedTime);

    const severeCasesByRequestedTime = Math.floor(0.15 * svrInfectionsByRequestedTime);

    const totalHospitalBedsByRequestedTime = Math.round(0.35 * totalBed) - severeCasesByRequestedTime;

    const svrBedsByRequestedTime = Math.round(0.35 * totalBed) - svrsevereCasesByRequestedTime;

    const casesForICUByRequestedTime = Math.floor(0.05 * infectionsByRequestedTime);

    const svrCasesForICUByRequestedTime = Math.floor(0.05 * svrInfectionsByRequestedTime);

    const CasesForVentilatorsByRequestedTime = Math.floor(0.02 * infectionsByRequestedTime);

    const svrCasesForVentilatorsByRequestedTime = Math.floor(0.02 * svrInfectionsByRequestedTime);

    dollarsInFlight = infectionsByRequestedTime * avgIncPop * avgIncome * numdays;

    dollarsInFlight = parseFloat(dollarsInFlight.toFixed(2));

    svrDollarsInFlight = svrInfectionsByRequestedTime * avgIncPop * avgIncome * numDays;
    
    svrDollarsInFlight = parseFloat(svrDollarsInFlight.toFixed(2));

    return {
        data: {...data},
        impact : {
            currentlyInfected,
            infectionsByRequestedTime,
            severeCasesByRequestedTime,
            totalHospitalBedsByRequestedTime,
            casesForICUByRequestedTime,
            CasesForVentilatorsByRequestedTime,
            dollarsInFlight
        },
        severeImpact : {
            currentlyInfected = svrcurrentlyInfected,
            infectionsByRequestedTime = svrInfectionsByRequestedTime,
            severeCasesByRequestedTime = svrsevereCasesByRequestedTime,
            totalHospitalBedsByRequestedTime = svrBedsByRequestedTime,
            casesForICUByRequestedTime = svrCasesForICUByRequestedTime,
            CasesForVentilatorsByRequestedTime = svrCasesForICUByRequestedTime,
            dollarsInFlight = svrDollarsInFlight
        }
    };
};

export default covid19ImpactEstimator;
