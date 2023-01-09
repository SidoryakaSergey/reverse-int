module.exports = function reverse(n) {
    const arrN =
        n < 0
            ? Array.from(String(Math.abs(n)), Number)
            : Array.from(String(n), Number);
    return parseInt(arrN.reverse().join(""));
};

// console.log(reverse(123));
