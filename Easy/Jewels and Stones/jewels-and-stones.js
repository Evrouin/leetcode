/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

const numJewelsInStones = (jewels, stones) => stones.split('').filter(v => jewels.includes(v)).length

// 3
console.log(numJewelsInStones("aA", "aAAbbbb"));
// 0
console.log(numJewelsInStones("z", "ZZ"));