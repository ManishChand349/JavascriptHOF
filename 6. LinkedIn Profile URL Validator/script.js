function validateLinkedInUrl(url) {
  const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  return regex.test(url);
}

const url1 = "https://www.linkedin.com/in/manishchand";


console.log(validateLinkedInUrl(url1));

