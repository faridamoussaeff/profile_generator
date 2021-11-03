const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('Which sport is your absolute favourite?', (answer) => {
    console.log(`My favourite sport: ${answer}`);
    rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
      console.log(`I have many skills, but my superpower is: ${answer}`);
      rl.question('What do you listen to while doing that?', (answer) => {
        console.log(`I enjoy listening music while coding, in particular: ${answer}`);
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer) => {
          console.log(`I am a foodie, but I love the most: ${answer}`);

  });

  rl.close();
});
}

// The rl.question() method displays the query by writing it to the output, 
// waits for user input to be provided on input, then invokes the callback function passing the provided input as the first argument.
// When called, rl.question() will resume the input stream if it has been paused.


// Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:
// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at