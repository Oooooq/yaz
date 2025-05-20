const axios = require('axios');

const proxySettings = {
    retries: 3,
    timeout: 5000
};

const makeRequest = async (url, method = 'GET', data) => {
    let attempts = 0;
    while (attempts < proxySettings.retries) {
        try {
            const response = await axios({ url, method, data });
            return response.data;
        } catch (error) {
            attempts++;
            if (attempts === proxySettings.retries) {
                throw new Error('Proxy request failed after multiple attempts');
            }
        }
    }
};

module.exports = { makeRequest };
