const input = "Hello, World!";

function reverseString(str) {
  return str.split("").reverse().join("");
}

setTimeout(() => {
  const reversedString = reverseString(input);
  console.log(reversedString);
}, 2000);
