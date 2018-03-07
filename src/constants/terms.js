// Import Dependencies
import { ANIMALS, COLORS, FOODS, VEHICLES } from './categories';

// Define Max Number of Times Terms Can Be Seen
export const maxSeenCount = 5;

// Define Terms
const terms = [
  { name: 'bat', categories: [ANIMALS], priority: 1 },
  { name: 'bear', categories: [ANIMALS], priority: 1 },
  { name: 'cat', categories: [ANIMALS], priority: 1 },
  { name: 'rat', categories: [ANIMALS], priority: 1 },

  { name: 'red', categories: [COLORS], priority: 1 },
  { name: 'blue', categories: [COLORS], priority: 1 },
  { name: 'green', categories: [COLORS], priority: 1 },

  { name: 'bacon', categories: [FOODS], priority: 1 },
  { name: 'chicken', categories: [ANIMALS, FOODS], priority: 1 },
  { name: 'ice cream', categories: [FOODS], priority: 1 },
  { name: 'orange', categories: [COLORS, FOODS], priority: 1 },
  { name: 'pizza', categories: [FOODS], priority: 1 },

  { name: 'airplane', categories: [VEHICLES], priority: 1 },
  { name: 'boat', categories: [VEHICLES], priority: 1 },
  { name: 'bus', categories: [VEHICLES], priority: 1 },
  { name: 'truck', categories: [VEHICLES], priority: 1 },
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
