// Function for get Palindrome Score
function getPalindromeScore(str) {
	
	splitStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
	strArr = splitStr.split(' ');
	strArr.forEach(validatePalindrome);
	return strArr.sort().reverse().slice(0, 2).reduce((a, b)=> a*b);
	
}
// function for validation of the Palindrome Score
function validatePalindrome(string, index, arr) {

    // convert string to an array
    const arrValues = string.split('');

    // reverse the array values
    const reverseArrValues = arrValues.reverse();

    // convert array to string
    const reverseString = reverseArrValues.join('');

    if(string.toLowerCase() == reverseString.toLowerCase()) {
		arr[index] = string.length;
    }
    else {
		arr[index] = 1;
    }

}
/*
*
*Q. How would the program need to change if it needs to analyze a sentence instead of a word and produce a similar result? e.g 'King, are you glad you are king'?
*
*A. We need to update two function.
 1. getPalindromeScore - Remove line no 4 and remove special character from string using str.replace(/[^a-zA-Z ]/g, "").
 2. validatePalindrome - Use split function on space in existing program on line no 14 - { const arrValues = string.split(' '); }, And on line no we need to add word count.
*/
