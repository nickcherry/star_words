// Import Dependencies
import { ANIMALS, COLORS, FOODS, VEHICLES } from './categories';

// Define Max Number of Times Terms Can Be Seen
export const maxSeenCount = 3;

// Define Terms
const terms = [
  { name: 'bat', categories: [ANIMALS], priority: 1 },
  { name: 'bear', categories: [ANIMALS], priority: 1 },
  { name: 'cat', categories: [ANIMALS], priority: 1 },
  { name: 'rat', categories: [ANIMALS], priority: 1 },
  { name: 'rabbit', categories: [ANIMALS], priority: 2 },
  { name: 'horse', categories: [ANIMALS], priority: 2 },
  { name: 'bird', categories: [ANIMALS], priority: 2 },
  { name: 'tiger', categories: [ANIMALS], priority: 2 },
  { name: 'deer', categories: [ANIMALS], priority: 2 },
  { name: 'squirrel', categories: [ANIMALS], priority: 3 },
  { name: 'turtle', categories: [ANIMALS], priority: 3 },
  { name: 'hippo', categories: [ANIMALS], priority: 3 },
  { name: 'cheetah', categories: [ANIMALS], priority: 3 },

  { name: 'red', categories: [COLORS], priority: 1 },
  { name: 'blue', categories: [COLORS], priority: 1 },
  { name: 'green', categories: [COLORS], priority: 1 },
  { name: 'black', categories: [COLORS], priority: 1 },
  { name: 'white', categories: [COLORS], priority: 1 },
  { name: 'yellow', categories: [COLORS], priority: 2 },
  { name: 'purple', categories: [COLORS], priority: 2 },
  { name: 'orange', categories: [COLORS], priority: 2 },
  { name: 'maroon', categories: [COLORS], priority: 2 },
  { name: 'teal', categories: [COLORS], priority: 2 },

  { name: 'apple', categories: [FOODS], priority: 1 },
  { name: 'cookie', categories: [FOODS], priority: 1 },
  { name: 'pizza', categories: [FOODS], priority: 1 },
  { name: 'bacon', categories: [FOODS], priority: 1 },
  { name: 'cake', categories: [FOODS], priority: 1 },
  { name: 'banana', categories: [FOODS], priority: 1 },
  { name: 'ice cream', categories: [FOODS], priority: 2 },
  { name: 'cheeseburger', categories: [FOODS], priority: 2 },
  { name: 'spaghetti', categories: [FOODS], priority: 2 },
  { name: 'pineapple', categories: [FOODS], priority: 2 },
  { name: 'general tso\'s', categories: [FOODS], priority: 2 },
  { name: 'foie gras', categories: [FOODS], priority: 3 },
  { name: 'mozzarella', categories: [FOODS], priority: 3 },
  { name: 'açaí', categories: [FOODS], priority: 3 },

  { name: 'truck', categories: [VEHICLES], priority: 1 },
  { name: 'bus', categories: [VEHICLES], priority: 1 },
  { name: 'boat', categories: [VEHICLES], priority: 1 },
  { name: 'car', categories: [VEHICLES], priority: 1 },
  { name: 'airplane', categories: [VEHICLES], priority: 1 },
  { name: 'helicopter', categories: [VEHICLES], priority: 2 },
  { name: 'bicycle', categories: [VEHICLES], priority: 2 },
  { name: 'tuk tuk', categories: [VEHICLES], priority: 2 },
];


// Initialize and Validate
const termNames = new Set();
terms.forEach((term) => {
  if (termNames.has(term.name)) {
    alert(`${ term.name } has been defined more than once!`);
  } else {
    termNames.add(term.name);
  }
  term.seenCount = 0;
});


export default terms;
