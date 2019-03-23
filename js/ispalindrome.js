let puncts = " ,.!?-'"

function isnotpunctuation(character, punct) {
	if (punct.length == 0) {
		return true;
	} else if (character == punct[0]) {
		return false;
	} else {
		return isnotpunctuation(character, punct.substr(1));
	}
}

function cleanstring(sentence) {
	if (sentence.length == 0) {
		return sentence;
	} else if (isnotpunctuation(sentence[0], puncts)) {
		return sentence[0] + cleanstring(sentence.substr(1));
	} else {
		return cleanstring(sentence.substr(1));
	}
}

function ispalindrome(string) {
	let len = string.length;
    if (len == 0) {
        return true;
    } else if (string[0] == string[len - 1]) {
        return ispalindrome(string.substr(1, len - 2));
    } else {
		return false;
	}
}

string2check = "Madam, I'm Adam!";
console.log("Checking if [" + string2check + "] is a palindrome: " + ispalindrome(cleanstring(string2check.toUpperCase())));

string2check = "Hello, World!";
console.log("Checking if [" + string2check + "] is a palindrome: " + ispalindrome(cleanstring(string2check.toUpperCase())));