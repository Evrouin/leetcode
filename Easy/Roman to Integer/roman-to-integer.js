/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let result = 0
    let prev = 0

    for (let i = 0; i < s.length; i++) {
        let num = roman[s[i]]
        if (num > prev) {
            result += num - 2 * prev
        } else {
            result += num
        }
        prev = num
    }

    return result
}

// Example #1
console.log(romanToInt("III"));

// Example #2
console.log(romanToInt("IV"));

// Example #3
console.log(romanToInt("IX"));

// Example #4
console.log(romanToInt("LVIII"));

// Example #5
console.log(romanToInt("MCMXCIV"));
