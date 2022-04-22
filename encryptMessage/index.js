       
function getEncryptString(str) {
	
	// Remove spaces from the string
	let string = str.replace(/\s/g,'').toLowerCase();	
	
	// Calculate square the root
	let sqrRoot = Math.sqrt(string.length);
	
	// Calculate number of the rows and columns
	let row = Math.floor(sqrRoot);
    let column = Math.ceil(sqrRoot);
	
	// Add string in the array
	let arrString = new Array();
	let count = 0;
	for (let i = 0; i < row; i++)
	{
		arrString[i] = new Array(column);
		for (let j = 0; j < column; j++)
		{
			 if(count < string.length){
				arrString[i][j] = string[count];
			 }else{
				arrString[i][j] = ''; 
			 }
			count++;
		}
		
	}
	
	// Reverse the array
	reverseArray = reverseArr(arrString);
	
	// Combine the charecter
	reverseArray.forEach(combineWord);
	
	// Get final encryptd string forment
	return reverseArray.join().replaceAll(',',' '); 
	
}

function reverseArray(arrString) {
	
	// Convert row to column and column to row
    return Object.keys(arrString[0]).map(function(c) {
        return arrString.map(function(r) { return r[c]; });
    });
}

function combineWord(string, index, arr) {
	
	// Create encrypt message with the spaces
	arr[index] = string.join().replaceAll(',','');
}















