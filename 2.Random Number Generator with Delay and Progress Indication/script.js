let delay = 3000; 
let countdown = delay / 1000; 

let timer = setInterval(function() {
  console.log(countdown + ' seconds remaining...');
  countdown--;
}, 1000); 

setTimeout(function() {
  clearInterval(timer); 
  let randomNum = Math.floor(Math.random() * 100) + 1; 
  console.log('Random number generated: ' + randomNum);
}, delay);
