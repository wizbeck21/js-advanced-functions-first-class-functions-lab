// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
  return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function(multiplyBy){
  return function(fare) {
    return fare * multiplyBy;
  }
}

function fareDoubler(fare) {
  return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(arr, arrToReturn) {
  return arrToReturn(arr);
}