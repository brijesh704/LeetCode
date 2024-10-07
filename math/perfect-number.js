/**
 * @param {number} num
 * @return {boolean}
 */
 // 0(n);
var checkPerfectNumber = function (num) {
    if (num <= 1) return false;
    let count = 0;
    let n = num;
    let sq = Math.floor(Math.sqrt(num))
    for (let i = 1; i <= sq ; i++) {
        if (num % i === 0) {
            count += i;
            if(i !== 1 &&i !== num/i){
                count += num/i
            }
        }
    }
    return  count === n ? true : false;
};