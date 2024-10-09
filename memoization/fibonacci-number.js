/**
 * @param {number} 
 * @return {number}
 */
var fib = function(n) {
    const memmo = [];
    const f = (n) => {
        if(n in memmo) return memo[n];
       if( n === 0 ) return 0;
       if(n === 1) return 1;
        let last = f(n-1);
        let slast = f(n-2);
        memo =  last + slast;
        return memo
    }

   return f(n)
};