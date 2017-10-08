const packageJson = require('../package.json');

module.exports = {
    myApi: {
        name: packageJson.name,
        url: 'http://localhost',
        port: process.env.PORT,
        version: packageJson.version
    },
    dataConfig: {
        MYSQL: {
            host: process.env.mysqlhost,
            user: process.env.mysqluser,
            database: process.env.mysqldatabase,
            password: process.env.mysqlpassword,
            port: +process.env.mysqlport
        }
    },
    slack: {
        urlHook: process.env.urlHook,
        channel: process.env.channel,
        iconUrl: process.env.iconUrl,
        botusername: process.env.botusername
    },
};