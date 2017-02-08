exports.Server = require('./lib/server');
exports.createServer = require('./lib/server').createServer;
exports.Client = require('./lib/client');
exports.connect = exports.createConnection = require('./lib/client').createConnection;
exports.HttpAgent = require('./lib/Agents').HttpAgent;
exports.HttpsAgent = require('./lib/Agents').HttpsAgent;
exports.auth = {
	None: require('./lib/auth/None'),
	UserPassword: require('./lib/auth/UserPassword')
};
