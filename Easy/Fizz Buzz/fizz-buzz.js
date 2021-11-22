/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    const result = []

    for (let i = 1; i <= n; i++) {
        ((i % 3) ? (i % 5) ? result.push(i.toString()) : result.push('Buzz') : (i % 5) ? result.push('Fizz') : result.push('FizzBuzz'))
    }

    return result
};

console.log(fizzBuzz(15));


