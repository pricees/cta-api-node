var ctaNode = require("cta-api")
var trainApiKey = process.env.CTA_TRAIN_API_KEY
    , busApiKey = process.env.CTA_BUS_API_KEY

var callback = function(data) { console.log("" + data); }
var errorCb = function(e) { console.log(e.message); }

ctaNode.bus.time.get({ key: busApiKey }, callback, errorCb);
ctaNode.bus.vehicles.get({ key: busApiKey, vid: [509,392] }, callback, errorCb);
ctaNode.bus.vehicles.get({ key: busApiKey, rt: [80] }, callback, errorCb);
ctaNode.bus.routes.get({ key: busApiKey }, callback, errorCb);
ctaNode.bus.directions.get({ key: busApiKey, rt: 80 }, callback, errorCb);
ctaNode.bus.stops.get({ key: busApiKey, rt: 80, dir: "Westbound" }, callback, errorCb);
ctaNode.bus.patterns.get({ key: busApiKey, rt: 80, vid: 909, top: 5 }, callback, errorCb);
ctaNode.bus.predictions.get({ key: busApiKey, rt: 20, stpid: 456 }, callback, errorCb);
ctaNode.bus.bulletins.get({ key: busApiKey, rt: 20, stpid: 456 }, callback, errorCb);

