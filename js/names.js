// Reading file, writing callback functions and checking regexp patterns

// setting file name
let fileName = "names.txt";

// function to get number of lines matching regexp patterns
function getCount(somePattern, someArray) {
    let numCount = 0;
	let myArray = someArray;
	let myPattern = somePattern;
    myArray.forEach(function(element) {
        let isMatch = myPattern.test(element);
        if (isMatch) { numCount++; }
    })
    return numCount;
}

// reading file and performing operations swith its content
let fs = require("fs");
fs.readFile(fileName, function(err, fileContent) {
    // putting lines into array
	let arrayOfValues = fileContent.toString().split("\n");
    // getting total number of lines
    let numOfStrings = arrayOfValues.length - 1;
    console.log("Total lines: " + numOfStrings);
    // getting number of five-char lines
    let fiveCharPattern = /^.{5}$/; // regexp for five-char lines
	console.log("Number of five-char lines: " + getCount(fiveCharPattern, arrayOfValues));
	// getting number of low-case alphabetic lines
    let lowCasePattern = /^[a-z]+$/; // regexp for low-case alphabetic lines
    console.log("Number of low-case alphabetic lines: " + getCount(lowCasePattern, arrayOfValues));
    // getting number of 1 upper-case, then some lower-case, then digits or punctuation
    let mixedPattern = /^[A-Z][a-z]+[0-9!"\#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]+$/; // regexp for lines like that ^
    console.log("Number of specially mixed lines: " + getCount(mixedPattern, arrayOfValues));
})