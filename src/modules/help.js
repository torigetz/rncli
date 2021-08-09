
const { isEmpty } = require('lodash');

const viewPresetCommands = (preset) => {
    console.log('   Preset commands:');
    for (let { command, description } of preset) {
        console.log(`   ${command.join(', ')} - ${description}`);
    }
    console.log('');
} 

const help = (preset, modules) => {
    console.log('');
    console.log(`   rncli v${require('../../package.json').version} help`)
    console.log(''); 
    if (!isEmpty(preset)) viewPresetCommands(preset);
    console.log('   rncli commands:')
    for (let { command, description } of modules) {
        console.log(`   ${command.join(', ')} - ${description}`)
    }
    console.log('');
}

module.exports = { help };
