module.exports = function transform(arr) {
    // remove line with error and write your code here
    if(Array.isArray(arr) === false){ 
        throw Error();
    }
    if(arr.length === 0){
        return [];
    }

    if(arr[0] == "--double-prev" || arr[0] == "--discard-prev"){
        arr.shift();
    }
    if(arr[arr.length - 1] == "--double-next" || arr[arr.length - 1] == "--discard-next"){
        arr.pop();
    }
    
    let double = [];
    double = arr.map(function callback(currentValue, index){
        if(currentValue == "--double-prev"){
            return arr[index-1];
        }
        else if(currentValue == "--double-next"){
            return arr[index+1];
        }
        else {
            return currentValue;
        } 
    });

    let discard = [];
    discard = arr.map(function callback(currentValue, index){
        if(currentValue == "--discard-prev"){
            return arr.splice([index-1], 2);
        }
        else if(currentValue == "--discard-next"){
            return arr.splice([index], 2);
        }
        else {
            return currentValue;
        }
    });
    return arr;
};
