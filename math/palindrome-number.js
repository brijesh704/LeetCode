/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
   
    let reverse = 0;
    let isnagative = x < 0 ? -1 : 1;
    x = Math.abs(x)
    let n = x
    while (x > 0) {
        let ld = x % 10;
        reverse = reverse * 10 + ld
        x = Math.floor(x / 10)
    }
    
     reverse = reverse * isnagative;
   
     if(n == reverse) {
        return true;
     } else {
         return false;
     }

     
};