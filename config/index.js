const dotenv = require('dotenv');

dotenv.config();

const config = {
    port: process.env.PORT || 3000
};

if (!config.port) {
    throw new Error("PORT is not defined in the environment variables.");
}

module.exports = config;
