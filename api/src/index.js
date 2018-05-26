const { PORT, ENV } = require('./config/vars');
const server = require('./config/server');

server.listen(PORT, () => console.info(`server started on port ${PORT} (${ENV})`));

module.exports = server;