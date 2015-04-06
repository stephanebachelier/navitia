module.exports = function (res) {
  var isPaginated = res.pagination !== undefined;
  console.log('> paginated ?', isPaginated);
  console.log('> total items #', res.pagination.total_result);

  if (isPaginated) {
    console.log('>> page', res.pagination.start_page);
    console.log('>> page items', res.pagination.items_on_page);
  }
}
