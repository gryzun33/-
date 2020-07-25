const arr1 = [2,3,6,8,10];

arr1.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

arr1.sort(compareNum);
function compareNum(a, b) {
    return a - b;
}