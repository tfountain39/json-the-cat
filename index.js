// index.js

// Require function from supporting function doc
const { fetchBreedDescription } = require('./breedFetcher');

// Allow command line arguments
const search = process.argv[2];

// Call imported function with console entered breedName and print to console
fetchBreedDescription(search, (error, desc) => {
  if (error) {
    console.log(`Error fetch details:`, error);
  } else {
    console.log(desc);
  }
});
