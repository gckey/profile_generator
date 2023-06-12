const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  profile.name = name;
  // console.log(`Thank you for your answer: ${name}`);
  // Continue with the next question here...
  rl.question("What's an activity you like doing? ", (activity) => {
    profile.activity = activity;
    // console.log(`Thank you for your answer: ${activity}`);

    rl.question("What do you listen to while doing that? ", (music) => {
      profile.music = music;
      // console.log(`Thank you for your answer: ${music}`);

      rl.question("Which meal is your favorite (e.g., dinner, brunch, etc.)? ", (meal) => {
        profile.meal = meal;
        // console.log(`Thank you for your answer: ${meal}`);

        rl.question("What's your favorite thing to eat for that meal? ", (food) => {
          profile.food = food;
          // console.log(`Thank you for your answer: ${food}`);

          rl.question("Which sport is your absolute favorite? ", (sport) => {
            profile.sport = sport;
            // console.log(`Thank you for your answer: ${sport}`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              profile.superpower = superpower;
              // console.log(`Thank you for your answer: ${superpower}`);

              // Generate the profile paragraph
              const profileParagraph = `Name: ${profile.name}\nActivity: ${profile.activity}\nMusic: ${profile.music}\nMeal: ${profile.meal}\nFavorite Food: ${profile.food}\nFavorite Sport: ${profile.sport}\nSuperpower: ${profile.superpower}`;
              console.log();
              // Output the profile paragraph
              console.log(">>>>Profile Generated:");
              console.log("----------------------");
              console.log(profileParagraph);

              rl.close();
            });
          });
        });
      });
    });
  });
});
