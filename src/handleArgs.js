
const { UNKNOWN_COMMAND } = require('./constants');
const modules = require('./modules');
const { isEmpty } = require('lodash');

const findCommand = async (commandsModule, args) => {
    const { debug } = require('./logger')(findCommand.name);

    for (let i = 0; i < commandsModule.length; i++) {
        const { command } = commandsModule[i];

        for (let cmd of command) {
            if (args.indexOf(cmd) > -1) {
                return (arg) => {
                    const cmdArgs = args.slice(2);
                    debug(`cmd args - ${cmdArgs}`)
                    commandsModule[i].module(arg, cmdArgs);
                }
            }
        }
    }

    return null;
}

const handlePresetCommands = async (preset, args) => {
    const command = await findCommand(preset, args);

    if (command) {
        command(require('./logger'));
        process.exit();
    }
}

const handleArgs = async (preset, args) => {
    const { error, debug } = require('./logger')(handleArgs.name);

    if (!isEmpty(preset)) {
        await handlePresetCommands(preset, args);
    }

    const command = await findCommand(modules, args);

    if (command) {
        command(preset);
        return;
    }

    error(UNKNOWN_COMMAND);
}

module.exports = { handleArgs };
