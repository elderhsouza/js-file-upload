const path = require('path');

require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.sample')
});

module.exports = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  LOGS: process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
};
