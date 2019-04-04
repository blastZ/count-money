const sails = require('sails');
const rc = require('sails/accessible/rc');
console.log(process.cwd());
process.chdir(__dirname);
console.log(process.cwd());
sails.lift(rc('sails'));
