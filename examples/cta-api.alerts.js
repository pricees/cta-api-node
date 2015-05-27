// If you are just testing the codez, change the require statement to require the local copy 
var ctaNode = require("cta-api")

// Set environment variables
//   $ EXPORT trainApiKey=ABC...
//   $ EXPORT busApiKey=123...
//
var trainApiKey = process.env.CTA_TRAIN_API_KEY
    , busApiKey = process.env.CTA_BUS_API_KEY


var callback = function(data) { console.log("" + data); }
var errorCb = function(e) { console.log(e.message); }

ctaNode.customerAlerts.routeStatus.get({}, callback, errorCb);

ctaNode.customerAlerts.detailedAlerts.get({}, callback, errorCb);
