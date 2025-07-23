const readline = require('readline');
const { detectIntent } = require('./dialogflowClient'); // Make sure this filename matches yours

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Talk to your bot!');

rl.on('line', async (input) => {
  const response = await detectIntent(input);
  console.log('Bot:', response);
});
















