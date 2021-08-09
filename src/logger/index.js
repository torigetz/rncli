
const { createDebugLogger } = require('./debug');
const { createErrorLogger } = require('./error');
const { createInfoLogger } = require('./info');

module.exports = moduleName => ({
    debug: createDebugLogger(moduleName),
    error: createErrorLogger(moduleName),
    info: createInfoLogger(moduleName)
})
