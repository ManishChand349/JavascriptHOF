const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
const url = "https://www.Manishchand.com";

if (regex.test(url)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
