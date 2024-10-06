/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let ans = 0;                       //3 - 32 - 321
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);


    while (x > 0) {
        let ld = x % 10;                    //3 - 2 - 1
        ans = ans * 10 + ld;              //3  -32 - 321
        x = Math.floor(x / 10);                         //12  - 1 - 0  
    }

    //restore sign
    ans = ans * sign;

    // Handle 32-bit integer overflow (as per the problem constraints)
    if (ans > Math.pow(2, 31) - 1 || ans < Math.pow(-2, 31)) {
        return 0;
    }

    return ans;

};

