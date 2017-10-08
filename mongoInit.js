const mongoose = require('mongoose');
global.db = mongoose.createConnection('mongodb://localhost/lost');