// const returnFirstTwoDrivers = function (arr){
//     return arr.slice(0,2);
// }

// const returnLastTwoDrivers = function(arr){
//     return arr.slice((arr.length - 2), arr.length);
// }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function createFareMultiplier(int) {
//     return function(fare){
//        return (fare * int);
//     }
// }

// const fareDoubler = createFareMultiplier(2);

// const fareTripler = createFareMultiplier(3);

// function selectDifferentDrivers(drivers, selection){
//     return selection();
// }












const returnFirstTwoDrivers = function (scuberDrivers){
    const firstTwoDrivers = scuberDrivers.slice(0,2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(scuberDrivers){
    const lastTwoDrivers = scuberDrivers.slice(2,4);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int){
    return function (fare){
        return (fare * int);
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(scuberDrivers, firstTwoOrLastTwo){
    let selection = firstTwoOrLastTwo(scuberDrivers);
    return selection;
}


































