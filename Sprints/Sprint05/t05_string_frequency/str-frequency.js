module.exports = class StrFrequency {
    result;
    
    constructor(orig) {
        this.result = orig;
    }

    letterFrequencies(letter) {
        let res = {};
        this.result.toUpperCase().split('').filter(c => c.match(/[A-Z]/g)).forEach(i => res[i] = (res[i] || 0) + 1);

        return res;
    }

    wordFrequencies(word) {
        let res = {};
        this.result.toUpperCase().split(/[^A-Z]+/g).filter(c => c !== '').forEach(i => res[i] = (res[i] || 0) + 1);

        return res;
    }

    reverseString() {
        return this.result.split("").reverse().join("");
    }
}



// const StrFrequency = require('./str-frequency');

// function test(str) {
//     const sf = new StrFrequency(str);
//     console.log(`Letters in ${str}`);
//     for (const [k, v] of Object.entries(sf.letterFrequencies())) {
//         console.log(`Letter ${k} is repeated ${v} times`);
//     }

//     console.log(`Words in ${str}`);
//     for (const [k, v] of Object.entries(sf.wordFrequencies())) {
//         console.log(`Word ${k} is repeated ${v} times`);
//     }

//     console.log(`Reverse of the string: ${str}`);
//     console.log(`${sf.reverseString()}`);
// }

// test("Face it, Harley-- you and your Puddin' are kaput!");
// console.log('**************');
// test('  Test test 123 45 !0 f   HeLlO wOrLd   ');
// console.log('**************');
// test('');
