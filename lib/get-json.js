var http = require("http");
var https = require("https");

var options = {
    host: 'api.github.com',
    port: 443,
    path: '/repos/welbert/github-latest/releases/latest',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'user-agent': 'node.js'
    }
};

function defineOptions(arg) {
    Object.keys(options).forEach(function(key) {
        options[key] = arg[key] || options[key];
    });
}

function getJSON(onResult){
    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);            
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        onResult(status,err);
    });

    req.end();
}

module.exports = {
    getJSON: getJSON,
    defineOptions: defineOptions
};