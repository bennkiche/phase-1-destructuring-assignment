const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 1. Destructure to assign animal names
// const [bessie, dolly, babe, little] = farmAnimals.split(' ');

// 2. Remove horse and assign four animals
const [bessie, babe, little, dolly] = farmAnimals.split(' ').filter(animal => animal !== 'horse');

// 3. Assign three animals with colors
const [blackAndWhite, black, pink] = [bessie, babe, little];

// 4. Destructure colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Assign colors using first letters (excluding indigo)
const [r, o, y, g, b, v] = colors.filter((color) => color !== 'indigo');

// 6. Assign indigo using indg
const [indg] = colors.filter((color) => color === 'indigo');

// 7. Destructure muppet properties
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure songs and Kermit's properties
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;
// 9. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = ['cow', 'horse', 'sheep', 'pig', 'chicken'];
// const [sheep, pig, chicken, cow] = farmAnimals.split(' ');
const [cow,horse, sheep, pig] = farmAnimals.split(' '); chicken = sheep
const [traditional1, traditional2, traditional3, traditional4] = [cow, sheep, pig, horse];

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner