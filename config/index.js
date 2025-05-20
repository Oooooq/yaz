const dotenv = require('dotenv');

dotenv.config();

const getConfig = () => {
  const requiredVars = ['API_KEY', 'DATABASE_URL'];
  requiredVars.forEach((variable) => {
    if (!process.env[variable]) {
      throw new Error(`Missing environment variable: ${variable}`);
    }
  });
};

getConfig();

module.exports = {
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
};
