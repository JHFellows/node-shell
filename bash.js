process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === 'pwd') {
    process.stdout.write(__dirname);
  }

  if(cmd === 'date') {
    process.stdout.write();
  }


  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});

