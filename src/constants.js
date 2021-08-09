
const IS_DEBUG = process.env.RNCLI_DEBUG === 'true';

// getConfig constants

const CONFIG_PREFIX = '--config';
const CONFIG_ARG_IS_EMPTY = CONFIG_PREFIX + ' is empty!';
const CONFIG_NOT_FOUND = configPath => configPath + ' not found';

// loadPreset constants

const PRESET_PACKAGE_NOT_FOUND = presetPackagePath => `${presetPackagePath} not found!`;
const PRESET_MAIN_IS_REQUIRED = preset => preset + '/package.json - main is required!';
const PRESET_MODULE_NOT_FOUND = file => `${file} not found`;
const PRESET_IS_NOT_INSTALLED = package => `${package} is not installed!`;

// handleargs

const UNKNOWN_COMMAND = 'unknown command!';

// Logger constants

const LOGGER_DEBUG = (moduleName, message) => `[DEBUG] [${moduleName}] `.yellow + message;
const LOGGER_ERROR = (moduleName, message) => `[ERROR] [${moduleName}] ${message}`.red;
const LOGGER_INFO = (moduleName, message) => `[INFO] [${moduleName}] `.blue + message;

const LOG_FILE_NAME = 'rncli-debug.log';

module.exports = {
    IS_DEBUG,

    CONFIG_ARG_IS_EMPTY,
    CONFIG_PREFIX,
    CONFIG_NOT_FOUND,

    PRESET_PACKAGE_NOT_FOUND,
    PRESET_MAIN_IS_REQUIRED,
    PRESET_MODULE_NOT_FOUND,
    PRESET_IS_NOT_INSTALLED,

    UNKNOWN_COMMAND,

    LOGGER_DEBUG,
    LOGGER_ERROR,
    LOGGER_INFO,
    LOG_FILE_NAME
};
