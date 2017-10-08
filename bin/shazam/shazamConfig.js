const package = require('../../package.json');

const shazam = require('shazam-middleware')({
    api: {
        name: package.name,
        version: package.version
    },
    slack:{
        urlHook: '?',
        channel: 'shazam'
    }
});


module.exports = shazam;