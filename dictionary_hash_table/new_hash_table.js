function LinkedList () {
  const Node = function (element) {
    this.element = element
    this.next = null
  }
// 存放 LinkedList 長度
  let length = 0
// 第一個節點的指標
  let head = null
// 在尾部新增一個節點
  this.append = function (element) {}
// 在特定位置新增一個元素節點
  this.insert = function (position, element) {}
// 從串列中移除一個元素節點
  this.remove = function (element) {}
// 從串列中移除一個特定的節點
  this.removeAt = function (position) {}
// 回傳元素在串列的元素節點 index，若無則回傳 -1
  this.indexOf = function (element) {}
// 判斷串列是否為空，是回傳 true，反之 false
  this.isEmpty = function () {}
// 回傳串列元素個數
  this.size = function () {}
// 由於 Node 是一個物件，所以運用 toString 方法將資料值輸出
  this.toString = function () {}
// 列印出值
  this.print = function () {}
}
function HashTable () {
  let table = []
// 實作內部一個 ValuePair 類別，存原始 key、value
  let ValuePair = function (key, value) {
    this.key = key
    this.value = value
  }
  let getHashTableCode = function (key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
// charCodeAt 會回傳指定字串內字元的 Unicode 編碼（可以包含中文字）
      hash += key.charCodeAt(i)
    }
// 為了取到較小值，使用任意數做除法 mod 處理
    return hash % 37
  }
  this.put = function (key, value) {
    let position = getHashTableCode(key)
// 若該位置沒有新增過元素，要先 init 一個 LinkedList 類別
    if (table[position] === undefinded) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
  }
  this.get = function (key) {
    let position = getHashTableCode(key)
    if (table[position] !== undefinded) {
      let current = table[position].getHead()
// 使用迴圈尋找在 LinkedList 中符合 key 的元素
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
// 若是要找的是第一個或是最後一個節點的情況就不會進入 while 迴圈，要在這裡處理
      if (current.element.key === key) {
        return current.element.value
      }
    }
    return undefinded
  }
// 與一般雜湊表不同，我們要移除的是鏈結串列的元素
  this.remove = function (key) {
    let position = getHashTableCode(key)
// 判斷該位置是否有元素
    if (table[position] !== undefinded) {
      let current = table[position].getHead()
      while (current.next) {
// 當 key 相同時使用 LinkedList 的 remove 移除元素
        if (current.element.key === key) {
          table[position].remove(current.element)
// 若是整個位置的 LinkedList 為空則將該位置給定 undefinded
          if (table[position].isEmpty()) {
            table[position] = undefinded
          }
// 若成功移除則回傳 true
          return true
        }
      }
      current = current.next
    }
// 若是要找的是第一個或是最後一個節點的情況就不會進入 while 迴圈，要在這裡處理
    if (current.element.key === key) {
      table[position].remove(current.element)
      if (table[position].isEmpty()) {
        table[position] = undefinded
      }
    }
  }
  return false
}
