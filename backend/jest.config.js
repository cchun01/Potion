// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    collectCoverageFrom: [
      "**/*.js",
      "!**/node_modules/**",
      "!**/coverage/**",
      "!**/jest.config.js",
    ],
    verbose: true,
  };
};
