var fs = require('fs');
var chalk = require('chalk');
// var newPrompt = process.stdout.write(chalk.yellow('\nprompt > '));

//QUESTIONS: store newPrompt in variable? Less repetition?
module.exports.pwd = function(arg, done) {
  done(__dirname);
 };

module.exports.date = function(arg, done) {
      var date = new Date().toString();
      done(date);
};

module.exports.ls = function(arg, done) {
  var files = fs.readdir('.', function(err, data) {
    if (err) throw err;
    data = data.join('\n');
    done(data);
  });
};

module.exports.echo = function(arg, done) {
  arg = arg.join(' ');
  if (arg === '$PATH') {
    done(process.execPath);
  } else {
    done(arg);
  }

};

module.exports.cat = function(arg, done) {
  arg = arg.join('');
  fs.readFile(arg, function(err, data) {
    if (err) throw err;
    done(data.toString('utf-8'));
  });
};
module.exports.head = function(arg, done) {
  arg = arg.join('');
  fs.readFile(arg, function(err, data) {
    if (err) throw err;
    var arr = data.toString('utf-8').split('\n');
    var str = arr.slice(0, 5).join('\n');
    done(str);
  });
};
module.exports.tail = function(arg, done) {
  arg = arg.join('');
  fs.readFile(arg, function(err, data) {
    if (err) throw err;
    var arr = data.toString('utf-8').split('\n')
    var str = arr.slice(arr.length - 6).join('\n');
    done(str);
  });
};
