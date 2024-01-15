// code your solution here

function superbowlWin(arr) {
    let year;
    arr.find(obj => {
        if (obj.result == 'W') {
            return year = obj.year;
        }
    })
    return year;
}
