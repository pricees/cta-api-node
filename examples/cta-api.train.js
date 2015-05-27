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

ctaNode.train.arrivals.get({ mapid: 40360, max: 1, key: trainApiKey }, callback, errorCb)

ctaNode.train.followThisTrain.get({ runnumber: 12, key: trainApiKey }, callback, errorCb)

ctaNode.train.locations.get({ rt: 'red', key: trainApiKey }, callback, errorCb)
