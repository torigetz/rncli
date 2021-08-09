
const { isArray, isEmpty } = require('lodash');

const generateErrorString = (key, name, message) => `preset[${key}].${name} ${message}`;

const validatePreset = async (preset) => {
    const { error, debug } = require('./logger')(validatePreset.name);
    const presetDebugger = (key, name, message) => debug(`preset[${key}].${name} ${message}`);

    let result = true;

    const presetIsArray = isArray(preset);
    
    if (!presetIsArray) {
        error('preset not array')
    }
    debug(`preset is array - ${presetIsArray}`);

    for (let i = 0; i < preset.length; i++) {
        let errorText = '';

        const { command, slug, description, module } = preset[i];

        if (!command) {
            errorText = generateErrorString(i, 'command', 'is required');
        }
        presetDebugger(i, 'command', command);

        const commandIsArray = isArray(command);
        if (!commandIsArray) {
            errorText = generateErrorString(i, 'command', 'is not array');
        }
        presetDebugger(i, 'command', `is Array ${commandIsArray}`);

        let commandIsEmpty = isEmpty(command);
        if (commandIsEmpty) {
            errorText = generateErrorString(i, 'command', 'is empty')
        }
        presetDebugger(i, 'command', `is Empty ${commandIsEmpty}`);

        if (!description) {
            errorText.generateErrorString(i, 'description', 'is required')
        }
        presetDebugger(i, 'description', description);

        if (errorText !== '') {
            error(errorText)
        }
    }

    return result;
}

module.exports = { validatePreset };
