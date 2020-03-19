module.exports = function repeater(str, options) {
    // remove line with error and write your code here
    if (typeof str !== 'string') {
        str = String(str);
    }
    if (typeof options.addition !== 'string') {
        options.addition = String(options.addition);
    }

    if(typeof options.separator == 'undefined') {
        options.separator = '+';
    }
    if(typeof options.additionSeparator == 'undefined') {
        options.additionSeparator = '|';
    }
    if(typeof options.addition == 'undefined'){
        options.addition = '';
    }
    if(options.addition == null){
        options.addition = String(null);
    }
    if(options.repeatTimes == undefined){
        options.repeatTimes = '0';
    }
    if(options.additionRepeatTimes == undefined){
        options.additionRepeatTimes = '0';
    }
    
    let separatorLength;
    if(options.separator !== undefined) {
        separatorLength = String(options.separator).length;
    }
    let additionSeparator;
    if(options.additionSeparator !== undefined) {
        additionSeparator = String(options.additionSeparator).length;
    }
    
    let additionStr;
    if(options.addition == '' || additionSeparator == ''){
        additionStr = '';
    } else {
        additionStr = options.addition.concat(String(options.additionSeparator));
    }

    let repeatAdditionStr;
    if(additionStr == '') {
        repeatAdditionStr = '';
    }
    else if(additionStr == '' && additionRepeatTimes == '') {
        repeatAdditionStr = '';
    } else {
        repeatAdditionStr = additionStr.repeat(options.additionRepeatTimes);
    }

    let separatorAdditionStr;
    if(repeatAdditionStr == '' || additionSeparator == '' || repeatAdditionStr.length == 0) {
        separatorAdditionStr = '';
    } else {
        separatorAdditionStr = repeatAdditionStr.substr(0, repeatAdditionStr.length - additionSeparator);
    }

    let concatStr;
    if(options.repeatTimes == '0') {
        concatStr = str.concat(additionStr);
    } else { 
        concatStr = str.concat(separatorAdditionStr + String(options.separator));
    }

    let repeatStr;
    if(options.repeatTimes == '0') {
        repeatStr = concatStr;
    } else {
        repeatStr = concatStr.repeat(options.repeatTimes);
    }
    
    let separatorStr;
    if(options.repeatTimes == '0') {
        separatorStr = repeatStr.substr(0, repeatStr.length - additionSeparator);
    } else { 
        separatorStr = repeatStr.substr(0, repeatStr.length - separatorLength);
    }
    return separatorStr;
};
