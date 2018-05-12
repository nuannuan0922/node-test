var dns = require('dns');

dns.lookup('cjia.com', function (err, address, family) {
    console.log(arguments);
    dns.reverse(address, function (err, hostname) {
        console.log(hostname);
    })
});