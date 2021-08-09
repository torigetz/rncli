
const fs = require('fs-extra');
const { IS_DEBUG, LOG_FILE_NAME, LOGGER_DEBUG } = require('../constants');
const path = require('path');

const startLogging = () => {
    if (IS_DEBUG) {
        const logPath = path.join(process.cwd(), LOG_FILE_NAME);
        if (fs.existsSync(logPath)) {
            fs.unlinkSync(logPath);
        }
        console.log(LOGGER_DEBUG('app', 'write logs - ' + logPath));
    }
}

const writeToFile = (msg) => {
    let content = '';

    const logFilePath = path.join(process.cwd(), LOG_FILE_NAME);
    
    if (fs.existsSync(logFilePath)) {
        content = fs.readFileSync(logFilePath, 'utf-8');
    }

    content += msg + '\n';

    fs.writeFileSync(logFilePath, content);
}

const logger = (msg) => {
    if (IS_DEBUG) {
        writeToFile(msg);
    }
    console.log(msg);
}

module.exports = { logger, startLogging };
