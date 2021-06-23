//Not finish at aall, neither returns undefined and all
function oldEnough(age) {
    if (age > 59) {
        throw Error('Too Old');
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
;
console.log(oldEnough(29));
