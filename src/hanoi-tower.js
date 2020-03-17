module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    // remove line with error and write your code here
    let secondsTurnsSpeed = turnsSpeed / 3600;
    let turns = 2 ** disksNumber - 1;
    let seconds = turns / secondsTurnsSpeed;
    return {turns, seconds};
}