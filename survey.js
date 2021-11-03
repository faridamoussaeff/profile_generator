const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Where do you like to travel for your vacation?', (answer1) => {
  console.log(`I love to travell, but my favourite destination is: ${answer1}`);
  rl.question('How many languages do you speak?', (answer2) => {
    console.log(`I can speak: ${answer2}`);
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc)?', (answer3) => {
      console.log(`I think, my favourite meal is: ${answer3}`);
      rl.question('Do you like spending your vacations at home or in a foreign country?', (answer4) => {
        console.log(`I prefer to spend my vacation in: ${answer4}`);
        rl.question('Which sport is your absolute favourite?', (answer5) => {
          console.log(`Oh, my absolute favourite is probably: ${answer5}`);
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer6) => {
            console.log(`I have many skills, but my superpower is: ${answer6}`);
            rl.close();
          });
        });
      });
    });
  });
});