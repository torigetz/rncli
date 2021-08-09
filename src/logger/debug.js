
const { logger } = require('./logger');
const { LOGGER_DEBUG, IS_DEBUG } = require('../constants');

const createDebugLogger = moduleName => message => {
    if (IS_DEBUG) {
        logger(LOGGER_DEBUG(moduleName, message))
    }
};

module.exports = { createDebugLogger };
