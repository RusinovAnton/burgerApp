const nconf = require('nconf');

nconf.file({ file: '../../app.config.json' });

export default nconf;
