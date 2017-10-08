const shazam = require('../bin/shazam/shazamConfig');

module.exports = (app) => {
    app.use(shazam.log);
};