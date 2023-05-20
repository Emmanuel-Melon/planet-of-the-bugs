const axios = require('axios').default;

// appwrite function
module.exports = async function test(req, res) {
    return sendTwilioSMS(req, res);
};

