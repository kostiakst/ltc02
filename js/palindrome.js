function palindrome(string) {
	let len = string.length;
    if (len == 0) {
        return true;
    } else if (string[0] == string[len - 1]) {
        return palindrome(string.substr(1, len - 2));
    } else {
		return false;
	}
}