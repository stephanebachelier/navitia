module.exports = function (line) {
  if (!line) {
    console.log('no line data found.');
    return;
  }
  console.log('Some data for this line');
  console.log('  * id', line.id);
  console.log('  * code', line.code);
  console.log('  * name', line.name);
  console.log('  * color', line.color ? '#' + line.color : 'none');
  console.log('  * network', line.network.name);
  console.log('  * routes : ');
  line.routes.forEach(function (route) {
    console.log('    > route ', route.direction.name);
  });
}
