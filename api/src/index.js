const { PORT, ENV } = require('./config/vars');
const app = require('./config/express');

app.listen(PORT, () => console.info(`server started on port ${PORT} (${ENV})`));

module.exports = app;