var http = require("http");
var querystring = require("querystring");

function get(options, callback, errorCb) {
  console.log(this.url + "?" + querystring.stringify(options))
  http.get(this.url + "?" + querystring.stringify(options), function(res) {
    res.on('data', callback) 
  }).on('error', errorCb)
}

var customerAlerts = {
  routeStatus: {
    url: "http://www.transitchicago.com/api/1.0/routes.aspx",
    get: get
  },
  detailedAlerts: {
    url: "http://www.transitchicago.com/api/1.0/alerts.aspx",
    get: get
  },
}
var train = {
  arrivals: {
    url: "http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx",
    get: get
  },
  followThisTrain: {
    url: "http://lapi.transitchicago.com/api/1.0/ttfollow.aspx",
    get: get
  },
  locations: {
    url: "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx",
    get: get
  }
}

var bus = {}

var CtaNode = {
  train: train,
  bus: bus,
  customerAlerts: customerAlerts
}

module.exports = CtaNode;
