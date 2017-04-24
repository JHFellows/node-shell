var commands = require('./commands.js');
var chalk = require('chalk');
var done = function(output) {
  process.stdout.write(chalk.green(output));;
  process.stdout.write(chalk.yellow('\nprompt > '));
};
// var fs = require('fs');
process.stdout.write(chalk.yellow('prompt > '));
process.stdin.on('data', function (data) {
  var arr = data.toString().trim().split(' ');
  var cmd = arr[0]; // remove the newline
  var args = arr.slice(1);

  commands[cmd](args, done);

  // var returned = commands[cmd](args);
  // process.stdout.write(chalk.green(returned));
  // process.stdout.write('\nprompt > ');
});
