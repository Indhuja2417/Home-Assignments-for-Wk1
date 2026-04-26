
function isPalindrome(value) {
  let reverse = "";

  for (let i = value.length -1; i>= 0; i--){
    reverse += value.charAt(i);
  }
  console.log(value + " : "+ reverse);
  
  
  if (value === reverse){
    console.log(`The String \"${value}\" is a Palindrome`);
  } 
  else{
    console.log(`The String \"${value}\" is not a Palindrome`);
  }
}

isPalindrome("madam")
isPalindrome("Indhuja")
