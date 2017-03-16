function HashTable () {
  var table = []
  var getHashTableCode = function (key) {
    var hash = 0
    for (var i = 0; i < key.length; i++) {
// charCodeAt 會回傳指定字串內字元的 Unicode 編碼（可以包含中文字）
      hash += key.charCodeAt(i)
    }
// 為了取到較小值，使用任意數做除法 mod 處理
    return hash % 37
  }
  this.put = function (key, value) {
// 根據 key 取出 Hash Function 產生的 position
    const position = getHashTableCode(key)
// 對應 key 和 value
    table[position] = value
  }
  this.get = function (key) {
// 根據 key 取出 Hash Function 產生的 position
    const position = getHashTableCode(key)
// 回傳值
    return table[position]
  }
  this.remove = function (key) {
// 根據 key 取出 Hash Function 產生的 position
    const position = getHashTableCode(key)
// 由於我們不能改變陣列長度（因為會影響到其它對應位置），所以將值給定 undefinded
    table[position] = undefinded
  }
}

var hashTable = new HashTable()
hashTable.put('Mark', 'mark@gmail.com')
hashTable.put('Ivy', 'ivy@gmail.com')
hashTable.put('Mary', 'mary@gmail.com')
hashTable.get('Mark')
hashTable.get('Jack')
// 刪除鍵值為 Mark 資料
hashTable.remove('Mark')
hashTable.get('Mark')
