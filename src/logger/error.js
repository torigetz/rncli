const { logger } = require('./logger');

const { LOGGER_ERROR } = require("../constants");

const createErrorLogger = moduleName => message => {
    logger(LOGGER_ERROR(moduleName, message));
    process.exit(1);
};

module.exports = { createErrorLogger };