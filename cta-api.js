var http = require("http");
var querystring = require("querystring");

function get(options, callback, errorCb) {
  http.get(this.url + "?" + querystring.stringify(options), function(res) {
    res.on('data', callback) 
  }).on('error', errorCb)
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

var bus = {
  time: {
    url: "http://www.ctabustracker.com/bustime/api/v1/gettime",
    get: get
  },
  vehicles: {
    url: "http://www.ctabustracker.com/bustime/api/v1/getvehicles",
    get: get
  },
  routes: {
    url: "http://www.ctabustracker.com/bustime/api/v1/getroutes",
    get: get
  },
  directions: {
    url: "http://www.ctabustracker.com/bustime/api/v1/getdirections",
    get: get
  },
  stops: {
    url: "http://www.ctabustracker.com/bustime/api/v1/getstops",
    get: get
  },
  patterns: {
    url: "http://www.ctabustracker.com/bustime/api/v1/getpatterns",
    get: get
  },
  predictions: {
    url: "http://www.ctabustracker.com/bustime/api/v1/getpredictions",
    get: get
  },
  bulletins: {
    url: "http://www.ctabustracker.com/bustime/api/v1/getservicebulletins",
    get: get
  },
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

var CtaNode = {
  train: train,
  bus: bus,
  customerAlerts: customerAlerts
}

module.exports = CtaNode;
