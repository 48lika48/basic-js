let maxDepth = 0;
module.exports = class DepthCalculator {
calculateDepth(arr, depth = 1) {
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) maxDepth = this.calculateDepth(arr[i], depth + 1);
  }
  maxDepth = (maxDepth > depth) ? maxDepth : depth;

  let result = maxDepth;
  maxDepth = 0;
  return result;
  }
};

// module.exports = class DepthCalculator {
//   calculateDepth(arr) {

//     let checkArr = [];
//     let count = 1;
//     for(let i = 0; i < arr.length; i++){
//       checkArr = arr.filter(function findArr(currentValue){
//           return Array.isArray(currentValue) === true;
//       });
//       if (checkArr.length === 0) {
//         return count;
//       }
//       else if (checkArr.length > 0) {
//         count ++;
//       }
//     }
//     return calculateDepth(arr);
//   }
// };