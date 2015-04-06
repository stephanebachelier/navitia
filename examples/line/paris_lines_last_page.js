var n = require('../../lib/navitia');
require('dotenv').load()
var moment = require('moment');
var descriptor = require('./descriptor');
var pagination = require('./pagination');

// query the last page for paris lines
var nbOfItems = 50;
n.query({apikey: process.env.apikey, debug: process.env.debug})
  .region('fr-idf')
  .lines()
  .end({count: nbOfItems})
  .on('ready', function (res) {
    pagination(res);
    console.assert(res.resource.length === nbOfItems);
    console.assert(res.resource.length === res.pagination.items_on_page);

    var total = res.pagination.total_result;

    if (res.pagination.items_on_page < nbOfItems) {
      console.log('no more pages');
      return;
    }
    var pagesCount = Math.floor(total / nbOfItems);
    var nbOfItemsOnLastPage = total - pagesCount * nbOfItems;

    // query the last page
    n.query({apikey: process.env.apikey, debug: process.env.debug})
      .region('fr-idf')
      .lines()
      .end({count: nbOfItems, start_page: pagesCount})
      .on('ready', function (res) {
        console.log('test pagination should have correct data');
        console.assert(nbOfItems === res.pagination.items_per_page, 'should have ' + nbOfItems + ' items per page');
        console.assert(res.pagination.start_page === pagesCount, 'should have ' + pagesCount + ' page');
        console.assert(nbOfItemsOnLastPage === res.pagination.items_on_page, 'should have ' + nbOfItemsOnLastPage + ' items on last page');
      });
  });
