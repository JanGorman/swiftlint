// const core = require('@actions/core');
// const wait = require('./wait');
const shell = require('shelljs');

shell.exec('swiftlint')

// most @actions toolkit packages have async methods
// async function run() {
//   try { 
//     const ms = core.getInput('milliseconds');
//     console.log(`Waiting ${ms} milliseconds ...`)

//     core.debug((new Date()).toTimeString())
//     wait(parseInt(ms));
//     core.debug((new Date()).toTimeString())

//     core.setOutput('time', new Date().toTimeString());
//   } 
//   catch (error) {
//     core.setFailed(error.message);
//   }
// }

// run()
