function Stack() {
  var items = [];
  this.push = function(element) {
    items.push(element);
  }
  this.pop = function() {
    return items.pop();
  }
  this.peek = function() {
    return items[items.length - 1];
  }
  this.isEmpty = function() {
    return items.length === 0;
  }
  this.clear = function() {
    items = [];
  }
  this.size = function() {
    return items.length;
  }
  // 加入印出結果方法
  this.print = function() {
    console.log(items.toString());
  }
}
