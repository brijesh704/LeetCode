/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let ans = [];
    let reverse = 0;
    let isnagative = x < 0 ? -1 : 1;
    x = Math.abs(x)
    let n = x
    while (x > 0) {
        let ld = x % 10;
        ans.push(ld);
        x = Math.floor(x / 10)
    }
    //number 
    for(let i=0 ; i<ans.length; i++){
        reverse = reverse*10 + ans[i];
    }
   
     reverse = reverse * isnagative;
     console.log(reverse)
     if(n == reverse) {
        return true;
     } else {
         return false;
     }

     
};