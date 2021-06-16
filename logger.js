var url = 'http://mylogger.io/log';

function log(message) {
    // send an HTTP request
    console.log(message);
}

// add log method to exports object, setting it to log function
module.exports.log = log;

// add url variable to exports object
// module.exports.url = url;
// url is implementation detail, does not need to be public


