var mongoClient = require('mongodb').MongoClient;
var configuration = require('../config.json');

module.exports = {
    // TODO: This method's work should be done when application starts. 
    // Otherwise, this method will be executed on every api call.
    implementRequestHelpers: function (request, response, next) {
        request._parameters = request._parameters || {};

        request.addParameter = function (parameterId, parameter) {
            request._parameters[parameterId] = parameter;
        };
        request.getParameter = function (parameterId) {
            return request._parameters[parameterId];
        };

        next();
    },
    addCorsHeaders: function (request, response, next) {
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        response.setHeader('Access-Control-Allow-Credentials', true);
        next();
    }
}