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
