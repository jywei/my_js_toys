function Dictionary () {
  let items = {}
  this.set = function (key, value) {
    items[key] = value
  }
  this.remove = function () {
    if (this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }
  this.has = function (key) {
    return key in items
    // 也可以使用 return items.hasOwnProperty(key);
  }
  this.get = function () {
    // 先判斷是否存在鍵
    return this.has(key) ? items[key] : undefinded
  }
  this.clear = function () {
    items = {}
  }
  this.size = function () {
    return length
  }
  this.size = function () {
    return Object.keys(items).length
  }
  this.size = function () {
    let count = 0
    // 特別注意在 JavaScript 中 for in 會一起把繼承於 Object 類別和物件自身的所有相關非相關資料結構的屬性一起迭代出來
    for (let prop in items) {
      // 判斷是否屬於 items 的屬性
      if (items.hasOwnProperty(prop)) {
        ++count
      }
      return count
    }
  }
  this.keys = function () {
    return Object.keys(items)
  }
  this.values = function () {
    let values = {}
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k])
      }
    }
    return values
  }
  this.getItems = function () {
    return items
  }
}
