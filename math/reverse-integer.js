/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
       let ans = []; // Array to store digits
    let isNegative = x < 0; // Check if x is negative
    x = Math.abs(x); // Take the absolute value

    while (x > 0) {
        let ld = x % 10; // Get last digit
        ans.push(ld); // Push last digit to the array
        x = Math.floor(x / 10); // Remove the last digit
    }

    // Construct the reversed number from the array
    let reversedNum = 0;
    for (let i = 0; i < ans.length; i++) {
        reversedNum = reversedNum * 10 + ans[i]; // Build the number
    }

    // Restore the sign
    if (isNegative) {
        reversedNum = -reversedNum;
    }

    // Handle 32-bit integer overflow
    if (reversedNum > Math.pow(2, 31) - 1 || reversedNum < Math.pow(-2, 31)) {
        return 0;
    }

    return reversedNum;
};

