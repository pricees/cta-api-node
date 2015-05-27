# cta-api-node
Thin node wrapper for the Chicago Transit Authority API written in Node.js

### Notes ###

I am new to node. My concentration was making this an extremely thin wrapper using only node core modules. As such, you will find no non-core dependencies. I also felt that testing would be over kill.

__Responses are in XML. Take this up with Rahm.__

Lots of juicy info for Chicago's developers here:  

http://www.transitchicago.com/developers/

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


#### Buses ####

Official Train Tracker API:  
http://www.transitchicago.com/assets/1/developer_center/BusTime_Developer_API_Guide.pdf

__Time__

Name | Value | Description
---- | ----- | -----------
Key | string (required) | 25-digit Bus Tracker API access key.

```javascript 
  ctaNode.bus.time.get({ key: busApiKey }, callback, errorCb);
```

__Vehicles__

Name | Value | Description
---- | ----- | -----------
Key  | string (required) | 25-digit Bus Tracker API access key.
Vid | comma-delimited list of vehicle IDs (not available with rt parameter) | Set of one or more vehicle IDs whose location should be returned. For example: 509,392,201,4367 will return information for four vehicles (if available). A maximum of 10 identifiers can be specified.
Rt | comma-delimited list of route designators (not available with vid parameter) | Set of one or more route designators for which matching vehicles should be returned. For example: X3,4,20 will return information for all vehicles currently running those three routes (if available). A maximum of 10 identifiers can be specified.

```javascript 
  ctaNode.bus.vehicles.get({ key: busApiKey, vid: [509,392] }, callback, errorCb);
  ctaNode.bus.vehicles.get({ key: busApiKey, rt: [80] }, callback, errorCb);
```

__Routes__

Name | Value | Description
---- | ----- | -----------
Key | string (required) | 25-digit Bus Tracker API access key.

```javascript 
  ctaNode.bus.routes.get({ key: busApiKey }, callback, errorCb);
```

__Route Directions__

Name | Value | Description
---- | ----- | -----------
Key | string (required) | 25-digit Bus Tracker API access key.
Rt | Single route designator (required) | Alphanumeric designator of a route (ex. “20” or “X20”) for which a list of available directions is to be returned.

```javascript 
  ctaNode.bus.routes.get({ key: busApiKey }, callback, errorCb);
```

Name | Value | Description
---- | ----- | -----------
key | string (required) | 25-digit Bus Tracker API access key.
rt | Single route designator (required) | Alphanumeric designator of the route (ex. “20” or “X20”) for which a list of available stops is to be returned.

```javascript 
  ctaNode.bus.directions.get({ key: busApiKey, rt: 80 }, callback, errorCb);
```

__Stops__ 

Name | Value | Description
---- | ----- | -----------
key | string (required) | 25-digit Bus Tracker API access key.
rt | Single route designator (required) | Alphanumeric designator of the route (ex. “20” or “X20”) for which a list of available stops is to be returned.
dir | Single route direction (required) | Direction of the route (ex. “East Bound”) for which a list of available stops is to be returned.

```javascript 
  ctaNode.bus.stops.get({ key: busApiKey, rt: 80, dir: "Westbound" }, callback, errorCb);
```
__Patterns__

Name | Value | Description
---- | ----- | -----------
key | string (required) | 25-digit Bus Tracker API access key.
pid | comma-delimited list of pattern IDs (not available with rt parameter) | Set of one or more pattern IDs whose points should be returned. For example: 56,436,1221 will return points from three (3) patterns. A maximum of 10 identifiers can be specified.
rt | Single route designator (required) | Alphanumeric designator of the route (ex. “20” or “X20”) for which a list of available stops is to be returned.

```javascript 
  ctaNode.bus.patterns.get({ key: busApiKey, rt: 80, vid: 909, top: 5 }, callback, errorCb);
```

__Predictions__

Name | Value | Description
---- | ----- | -----------
key | string (required) | 25-digit Bus Tracker API access key.
stpid | comma-delimited list of stop IDs (not available with vid parameter) | Set of one or more stop IDs whose predictions are to be returned. For example: 5029,1392,2019,4367 will return predictions for the four stops. A maximum of 10 identifiers can be specified.
rt | comma-delimited list of route designators (optional, available with stpid parameter) | Set of one or more route designators for which matching predictions are to be returned.
vid | comma-delimited list of vehicle IDs (not available with stpid parameter) | Set of one or more vehicle IDs whose predictions should be returned. For example: 509,392,201,4367 will return predictions for four vehicles. A maximum of 10 identifiers can be specified.
top | number (optional) | Maximum number of predictions to be returned.

```javascript 
  ctaNode.bus.predictions.get({ key: busApiKey, rt: 20, stpid: 456 }, callback, errorCb);
```

__Service Bulletins__

Name | Value | Description
---- | ----- | -----------
key | string (required) | 25-digit Bus Tracker API access key.
rt | comma-delimited list of route designators (optional, available with stpid parameter) | Set of one or more route designators for which matching predictions are to be returned.
rtdir | Single route direction (optional) | Direction of travel of the route specified in the rt parameter. The rt parameter is required when using the rtdir parameter.
stpid | comma-delimited list of stop IDs (not available with vid parameter) | Set of one or more stop IDs whose predictions are to be returned. For example: 5029,1392,2019,4367 will return predictions for the four stops. A maximum of 10 identifiers can be specified.

```javascript 
  ctaNode.bus.bulletins.get({ key: busApiKey, rt: 20, stpid: 456 }, callback, errorCb);
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

