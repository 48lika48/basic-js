module.exports = function createDreamTeam(members) {
  //remove line with error and write your code here
  if (Array.isArray(members) === false){ 
    return false;
  }

  let newMembers = members.filter(function(item){
    return typeof item == "string";
  });
  
  let arr = newMembers.map(function(item){
    if(item.charAt(0) === " ") {
      return item.trim().slice(item.indexOf(" "), 1);
    }
    else {
      return item.charAt(0);
    }
  });
  
  let str = arr.join("").toUpperCase();
  let abbreviation = str.split("").sort().join("");

  return abbreviation;
}
