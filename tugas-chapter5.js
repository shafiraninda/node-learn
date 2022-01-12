const os = require('os')
const fs = require('fs')

const cpuInfo = os.cpus()
fs.writeFile('./info-cpu.json',
JSON.stringify(cpuInfo), (error) => {
    if (error) throw error;
});
