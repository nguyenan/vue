var args = process.argv.slice(2)
if (args.indexOf('--config') === -1) {
  args = args.concat(['--config', 'test/e2e/nightwatch.config.js'])
}
if (args.indexOf('--env') === -1) {
  args = args.concat(['--env', 'chrome,phantomjs'])
}
var i = args.indexOf('--test')
if (i > -1) {
  args[i + 1] = 'test/e2e/specs/' + args[i + 1] + '.js'
}

var runner = spawn('./node_modules/.bin/nightwatch', args, {
  stdio: 'inherit'
})

runner.on('exit', function (code) {
  server.close()
  process.exit(code)
})

runner.on('error', function (err) {
  server.close()
  throw err
})
function myFunction(p1, p2) {
    return p1 * p2; 
}
// An edited
// An edited 17:19 Thursday, July 5, 2018 (GMT+7)
// updated
// delete some lines
// add some functions
