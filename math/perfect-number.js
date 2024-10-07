/**
 * @param {number} num
 * @return {boolean}
 */
 // 0(n);
var checkPerfectNumber = function (num) {
    if (num <= 1) return;
    let count = 0;
    let n = num;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            count += i;
        }
    }
    return  count === n ? true : false;
};