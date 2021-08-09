const { logger } = require('./logger');
const { LOGGER_INFO } = require('../constants');

const createInfoLogger = moduleName => message => {
    logger(LOGGER_INFO(moduleName, message));
}

module.exports = { createInfoLogger };
