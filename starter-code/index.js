var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.items.sort((a, b) => {
    return a - b;
  });
  this.length = this.items.length;
}

SortedList.prototype.get     = function(pos) {
  return this.items[pos -1];
}

SortedList.prototype.max     = function() {
  return this.items[this.length - 1];
}

SortedList.prototype.min     = function() {
  return this.items[0];
}

SortedList.prototype.average = function() {
  return this.sum() / this.length;
}

SortedList.prototype.sum     = function() {
  if(this.length === 0) {
    return 'EmptySortedList'
  }
 return this.items.reduce((acc, elem) => {
   return acc + elem;
 })
}

module.exports = SortedList;
