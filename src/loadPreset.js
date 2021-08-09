
const isInstalled = require('is-installed');
const fs = require('fs-extra');
const path = require('path');
const { validatePreset } = require('./validatePreset');
const {
    PRESET_PACKAGE_NOT_FOUND,
    PRESET_MAIN_IS_REQUIRED,
    PRESET_MODULE_NOT_FOUND,
    PRESET_IS_NOT_INSTALLED
} = require('./constants');

const loadPreset = async (config) => {
    const { debug, error } = require('./logger')(loadPreset.name);

    if (!config.preset) {
        error('config.preset not found');
    }

    const isFile = config.preset.indexOf('./') > -1;
    debug(`${config.preset} is file - ${isFile}`)

    let preset;

    if (isFile) {
        const presetPackagePath = path.join(process.cwd(), config.preset, 'package.json');
        if (!fs.existsSync(presetPackagePath)) {
            error(PRESET_PACKAGE_NOT_FOUND(presetPackagePath));
        }
        debug(`${config.preset} package.json - ${presetPackagePath}`)

        const presetPackage = require(presetPackagePath);
        if (!presetPackage.main) {
            error(PRESET_MAIN_IS_REQUIRED(config.preset))
        }
        debug(`${config.preset} main module - ${presetPackage.main}`)

        const presetModulePath = path.join(process.cwd(), config.preset, presetPackage.main);
        if (!fs.existsSync(presetModulePath)) {
            error(PRESET_MODULE_NOT_FOUND(presetModulePath));
        }

        preset = require(presetModulePath);
    } else {
        try {
            preset = require(config.preset)
        } catch (e) {
            error(PRESET_IS_NOT_INSTALLED(config.preset));
        }
    }

    const valid = await validatePreset(preset);
    if (valid) {
        return preset;
    }
}

module.exports = { loadPreset };
