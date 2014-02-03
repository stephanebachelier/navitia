# navitia

library to query navitia API

## Usage

An example is better than thousands words:
```
var navitia = require('navitia');
navitia()
  .regions() // ask for all regions
  .query() // call navitia API
  .on('ready', function (res) {
    // result from API
  });
```

To call the API you must call the `query` method which will launch the HTTP call.

To listen to the result just add a listener callback on the `ready` event.

`res` is an `object` which have the following fields depending on the response returned by the API:

If the API return a valid response, it will have the following form:
 * `statusCode`: (int = 20x)
 * `resource`: (mixed) the resource asked for
 * `pagination`: (object) the pagination object if any returned or false
 * `links`: (array) a list of links from this resource

In case of error, the reponse will have the following form:
 * `statusCode`: (int >= 400)
 * `error`, (string) error message


## API

The examples below are not fully functional. You must call the query() for the HTTP call to be made and add a listener on `ready` event as explained in *Usage* section.

### Regions: all the regions covered by navitia

```
navitia().regions()
```

### Region: show one region

```
navitia().region('paris')
```

### Lines: show lines in a given region

```
navitia().region('paris').lines()
```

### Lines: show a line in a given region

```
navitia().region('paris').lines(/* line id */)
```
