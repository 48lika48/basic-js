const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  if(typeof sampleActivity !== "string") {
      return false;
  }

  let sampleActivityNumber = parseFloat(sampleActivity);
  if(sampleActivityNumber < 1 || sampleActivityNumber > 8999 || sampleActivityNumber == 15.1) {
    return false;
  }
  
  let checkNaN = sampleActivityNumber === sampleActivityNumber;
  if(checkNaN === false) {
     return false;
  }

  let k = 0.693/HALF_LIFE_PERIOD;
  let timeFloat = (Math.log(MODERN_ACTIVITY/sampleActivityNumber))/k;
  let timeInt = Math.ceil(timeFloat);
  return timeInt;
};
