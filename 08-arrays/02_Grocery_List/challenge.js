module.exports.addItem = function(item, list) {
    var groceryList = list;
    if (groceryList.indexOf(item)) {
      groceryList.push(item);
    }
    return groceryList;
}

module.exports.reverseSortedList = function(x) {
  var array = x;
  return array.sort().reverse();
}