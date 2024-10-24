// 7 - Create the function. It should accept two string parameters and return the longer one

// Your code here
function longerString(firststring, secondstring) {
    if (firststring.length > secondstring.length) {
        return firststring;
    } else if (firststring.length < secondstring.length){
        return secondstring;
    } else {
        return 'Strings are equal';
    }
};
  
console.log(longerString('codemify', 'test')) // codemify
console.log(longerString('automation', 'coding')) // automation
console.log(longerString('automation', 'the codemify')) // the codemify