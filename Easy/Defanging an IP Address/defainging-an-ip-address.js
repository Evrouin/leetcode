/**
 * @param {string} address
 * @return {string}
 */

const defangIPaddr = function (address) {
    return address.replace(/\./g, "[.]");
};

// "1[.]1[.]1[.]1"
console.log(defangIPaddr("1[.]1[.]1[.]1"));

// "255[.]100[.]50[.]0"
console.log(defangIPaddr("255[.]100[.]50[.]0"));