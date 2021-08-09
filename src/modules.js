
const { version } = require("./modules/version");
const { help } = require('./modules/help');

const modules = [
    {
        command: [ '-v', '--version' ],
        description: 'version of rncli',
        module: version
    },
    {
        command: [ '-h', '--help' ],
        description: 'help command for rncli',
        module: (arg) => help(arg, modules)
    }
];

module.exports = modules;