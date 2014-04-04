'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME || 
         'mongodb://localhost/fullstack-dev'
  }
};
