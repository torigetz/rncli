
const package = require('../../package.json');

const version = (preset, args) => {
    console.log(`v${package.version}`)
}

module.exports = { version };
