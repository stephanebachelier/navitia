# navitia

library to query navitia API

## Usage

An example is better than thousands words:
```
var navitia = require('navitia');
navitia
  .query(options) // call navitia API
  .regions() // ask for all regions
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

Options passed to the `query` function is an object that can be helpful either to configure some queries or to control the behavior of the API querying, like asking for debugging, etc.

if you want to debug the call you should set `debug` key to true, and it will log the HTTP request, useful for debugging purpose.

## Authentication

Since v1, all requests to Navitia API must be authenticated. Navitia supports both `Basic HTTP authentication` and `HTTP Authorization header`. This library only support the last option, which is `HTTP Authorization header`.

See [navitia doc](https://github.com/CanalTP/navitia/blob/dev/documentation/navitia.io/source/integration.rst#authentication)

The best way to provide the api key is to use a `.env` file using the format giben below. The example also set the `debug` flag to 0

```
apikey=abcdefgh-abcd-abcd-abcd-abcdefghijkl
debug=0
```

## API

The examples below are not fully functional. You must call the query() for the HTTP call to be made and add a listener on `ready` event as explained in *Usage* section.

### Regions: all the regions covered by navitia

```
navitia.query(/* options */).regions()
```

### Region: show one region

```
navitia.query(/* options */).region('paris')
```

### Lines: show lines in a given region

```
navitia.query(/* options */).region('paris').lines()
```

### Lines: show a line in a given region

```
navitia.query(/* options */).region('paris').lines(/* line id */)
```
