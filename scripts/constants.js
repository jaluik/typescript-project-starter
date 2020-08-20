const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

module.exports = {
  isDev: isDevelopment,
  PROJECT_PATH,
  PROJECT_NAME,
};