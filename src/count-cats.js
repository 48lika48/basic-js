module.exports = function countCats(matrix) {
  // remove line with error and write your code here
    let concatArr = [];
    let cats = [];
    concatArr = [].concat(...matrix);
    cats = concatArr.filter(function (item){
      return item == "^^";
    });
    return cats.length;
}