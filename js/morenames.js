// setting our regexp patterns
const fiveCharPattern = /^.{5}$/; // regexp for five-char lines
const lowCasePattern = /^[a-z]+$/; // regexp for low-case alphabetic lines
const mixedPattern = /^[A-Z][a-z]+[0-9!"\#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]+$/; // regexp for mixed lines
// setting file name
const fileName = "names.txt";
// creating reading stream
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: fs.createReadStream(fileName)
});
// setting counters to 0
let totalCounter = 0;
let fiveCharCounter = 0;
let lowCaseAlphaCounter = 0;
let mixedCounter = 0;
// actions on getting line - incrementing counter on match
rl.on("line", function(line) {
    totalCounter++;
	if (fiveCharPattern.test(line)) { fiveCharCounter++; }
	if (lowCasePattern.test(line)) { lowCaseAlphaCounter++; }
    if (mixedPattern.test(line)) { mixedCounter++; }
})
// actions on closing stream - printing values
rl.on("close", function() {
    console.log("Total lines: " + totalCounter);
    console.log("Number of five-char lines: " + fiveCharCounter);
    console.log("Number of low-case alphabetic lines: " + lowCaseAlphaCounter);
    console.log("Number of specially mixed lines: " + mixedCounter);
})