/*
 * Define and set up Gulp tasks to build assets.
 */
var rump = require('rump');

rump.autoload().addGulpTasks().configure({
  paths: {
    source: {
      root: 'assets'
    },
    destination: {
      root: 'public'
    }
  },
  scripts: {
    common: true
  }
});
