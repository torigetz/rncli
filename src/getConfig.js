
const path = require('path');
const fs = require('fs-extra');
const {
    CONFIG_ARG_IS_EMPTY, CONFIG_NOT_FOUND
} = require('./constants');

const getConfig = async (args) => {
    const { error, debug } = require('./logger')(getConfig.name);

    debug('Loading config...')
    let configPath = path.join(process.cwd(), 'rncli.config.js');
    debug(`Config path - ${configPath}`)

    const configArgPosition = args.indexOf('--config');
    const customConfigFile = args[configArgPosition + 1]
    
    if (configArgPosition > -1) {
        if (!customConfigFile) {
            error(CONFIG_ARG_IS_EMPTY)
        }
        configPath = path.join(process.cwd(), customConfigFile);
    }

    if (!fs.existsSync(configPath)) {
        error(CONFIG_NOT_FOUND(configPath));
    }

    return require(configPath);
}

module.exports = { getConfig };
