// Reading file, writing callback functions and checking regexp patterns

// setting file name
let fileName = "names.txt";

// function to get number of strings matching regexp patterns
function getCount(somePattern, someArray) {
    let numCount = 0;
	let myArray = someArray;
	let myPattern = somePattern;
    myArray.forEach(function(element) {
        let isMatch = myPattern.test(element)
        if (isMatch) { numCount++; }
    })
    return numCount;
}

// reading file and performing operations swith its content
let fs = require("fs");
fs.readFile(fileName, function(err, fileContent) {
    // putting strings into array
	let arrayOfValues = fileContent.toString().split("\n");
    // getting total number of strings
    let numOfStrings = arrayOfValues.length - 1;
    console.log("Total number of strings is " + numOfStrings);
    // getting number of five-char strings
    let fiveCharPattern = /^.{5}$/; // regexp for five-char strings
	console.log("Number of five-char strings is " + getCount(fiveCharPattern, arrayOfValues));
	// getting number of low-case alphabetic strings
    let lowCasePattern = /^[a-z]+$/; // regexp for low-case alphabetic strings
    console.log("Number of low-case alphabetic strings is " + getCount(lowCasePattern, arrayOfValues));
    // getting number of 1 upper-case, then some lower-case, then digits or punctuation
    let mixedPattern = /^[A-Z][a-z]+[0-9!"\#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]+$/; // regexp for strings like that ^
    console.log("Number of specially mixed strings is " + getCount(mixedPattern, arrayOfValues));
})