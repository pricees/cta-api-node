# cta-api-node
Thin node wrapper for the Chicago Transit Authority API written in Node.js

### Notes ###

I am new to node. I concentration was making this an extremely thin wrapper, using only node core modules. As such, you will find no dependencies. I also felt that testing would be over kill

__Response is in XML. Take it up with Rahm.__

Complete list of 'L' Stops:

https://data.cityofchicago.org/Transportation/CTA-System-Information-List-of-L-Stops/8pix-ypme

### Usage ###

#### Trains ####

Official Train Tracker API:  
http://www.transitchicago.com/developers/ttdocs/default.aspx


__Locations__

Parameters  

Name | Value | Description
---- | ----- | -----------
mapid | Numeric station identifier (required if stpid not specified) | A single five-digit code to tell the server which station you’d like to receive predictions for. See appendix for information about valid station codes. 
stpid | Numeric stop identifier (required if mapid not specified) | A single five-digit code to tell the server which specific stop (in this context, specific platform or platform side within a larger station) you’d like to receive predictions for. See appendix for information about valid stop codes. 
max | Maximum results (optional) | The maximum number you’d like to receive (if not specified, all available results for the requested stop or station will be returned) 
rt | Route code (optional) | Allows you to specify a single route for which you’d like results (if not specified, all available results for the requested stop or station will be returned) 
key |Alphanumeric API key (required) |Your unique API key, assigned to you after agreeing to DLA and requesting a key be generated for you.

```javascript 
var callback = function(data) { console.log("" + data); }
var errorCb = function(e) { console.log(e.message); }
ctaNode.train.arrivals.get({ mapid: 40360, max: 1, key: trainApiKey }, callback, errorCb)

```

__Follow That Train__

Parameters  
Name | Value | Description
---- | ----- | -----------
runnumber | Train Run Number (required) | Allows you to specify a single run number for a train for which you’d like a series of upcoming arrival estimations. 
key | Alphanumeric API key (required) | Your unique API key, assigned to you after agreeing to DLA and requesting a key be generated for you. 

```javascript 
var callback = function(data) { console.log("" + data); }
var errorCb = function(e) { console.log(e.message); }
ctaNode.train.followThisTrain.get({ runnumber: 909, key: trainApiKey }, callback, errorCb)

```

__Locations__

Parameters  

Name | Value | Description
---- | ----- | -----------
rt | Train route(s) (required) | Allows you to specify one or more routes for which you’d like train location information.
key | Alphanumeric API key (required) | Your unique API key, assigned to you after agreeing to DLA and requesting a key be generated for you. 

```javascript 
var callback = function(data) { console.log("" + data); }
var errorCb = function(e) { console.log(e.message); }
ctaNode.train.locations.get({ rt: 'red', key: trainApiKey }, callback, errorCb)

```


#### Alerts ####

Gives you information on stop/station outages and signifant alerts.

__No options.__  
__There appears to be HTML in some of the alerts. Take it up with Rahm.__

```javascript 
var callback = function(data) { console.log("" + data); }
var errorCb = function(e) { console.log(e.message); }
ctaNode.customerAlerts.routeStatus.get({}, callback, errorCb);
ctaNode.customerAlerts.detailedAlerts.get({}, callback, errorCb);
```
### Contribute ###

Fork, code, pull request

