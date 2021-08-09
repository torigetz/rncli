
const { startLogging } = require('./logger/logger');

const { getConfig } = require('./getConfig');
const { loadPreset } = require('./loadPreset');
const { handleArgs } = require('./handleArgs');

const start = async (args) => {
    startLogging();

    const config = await getConfig(args);
    const preset = await loadPreset(config);

    await handleArgs(preset, args);
}

module.exports = {
    start
};
