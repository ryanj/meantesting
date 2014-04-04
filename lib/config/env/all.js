'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  root: rootPath,
  ip:   process.env.OPENSHIFT_NODEJS_IP ||
        '127.0.0.1',
  port: process.env.PORT || 
        process.env.OPENSHIFT_NODEJS_PORT ||
        9000,
  mongo: {
    uri: process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
         'mongodb://localhost/fullstack',
    options: {
      db: {
        safe: true
      }
    }
  }
};
