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

runner.on('exit', function (code) {
  server.close()
  process.exit(code)
}) 
// An edited
// An edited 17:19 Thursday, July 5, 2018 (GMT+7)
// updated 
