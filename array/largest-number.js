/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let str = nums.map((n) => n.toString());
    let n = nums.length;
    for(let i=0; i<=n-2; i++){
        let min = i;
        for(let j= i+1; j<n ; j++){
           if(str[j]+str[min] > str[min]+str[j]){
             min = j;
           }
        }
        [str[i], str[min]] = [str[min],str[i]];
    }
    if(str[0] == 0) return "0";
    return str.join("");
};