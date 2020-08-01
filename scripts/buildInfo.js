const boxen = require('boxen');

const packageJson = require('../package.json');
const NodeUtils = require('../src/services/common/node-service');

/**
 * Boxen options as defined by https://www.npmjs.com/package/boxen
 * @type {{padding: {top: number, left: number, bottom: number, right: number}}}
 */
const options = {
  padding: {
    left: 2,
    right: 2,
    top: 1,
    bottom: 1,
  },
};

module.exports = function () {
  const details = ` > Building for *${NodeUtils.getNodeEnvMode()}*`;
  const author = ` > By ${packageJson.author}`;

  const title = `${packageJson.name} (v${packageJson.version})`;
  console.log(boxen(`${title}\n\n${author}\n${details}`, options));
};
