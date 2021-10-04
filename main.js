const app = require('./app');
require('dotenv').config();

const port = process.env.PORT;

async function main() {
    await app.listen(port);
    console.log('server running on port', port);
}

main();