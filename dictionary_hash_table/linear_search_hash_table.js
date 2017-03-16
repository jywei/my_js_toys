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
// 由於 JavaScript 陣列可動態增加長度，所以不用擔心長度不夠問題
  this.put = function (key, value) {
    let position = getHashTableCode(key)
// 若是位置沒被佔據直接 new 一個 ValuePair，若有則考慮下一個 index
    if (table[position] === undefinded) {
      table[position] = new ValuePair(key, value)
    } else {
      let index = ++position
      while (table[index] !== undefinded) {
        index++
      }
      table[index] = new ValuePair(key, value)
    }
  }
  this.get = function (key) {
    let position = getHashTableCode(key)
// 先確認鍵值是否存在
    if (table[position] !== undefinded) {
// 開始比對，沒有就下一個
      if (table[position].key === key) {
        return table[position].value
      } else {
        let index = ++position
        while (table[index] === undefinded || table[index].key !== key) {
          index++
        }
        if (table[index].key === key) {
          return table[index].value
        }
      }
    }
    return undefinded
  }
  this.remove = function (key) {
    let position = getHashTableCode(key)
// 先確認鍵值是否存在
    if (table[position] !== undefinded) {
// 開始比對，沒有就下一個
      if (table[position].key === key) {
        table[index] = undefinded
      } else {
        let index = ++position
        while (table[index] === undefinded || table[index].key !== key) {
          index++
        }
        if (table[index].key === key) {
          table[index] = undefinded
        }
      }
    }
    return undefinded
  }
}
