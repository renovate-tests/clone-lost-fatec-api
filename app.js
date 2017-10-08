require('./mongoInit');
const app = require("express")();
const consign = require('consign');
require('dotenv').config({ path: `./env/${process.env.NODE_ENV || 'development'}.env` })
const webconfig = require('./bin/webconfig.js');

consign({
    verbose: false
}).include('kernel')
    .then('bin/controller')
    .into(app);

app.listen(webconfig.myApi.port, () => {
    console.log(`[${webconfig.myApi.name}] - Ativo :D | ${webconfig.myApi.url}:${webconfig.myApi.port}`);
});


module.exports = app;