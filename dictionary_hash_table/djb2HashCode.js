let djb2HashCode = function (key) {
// 初始化 hash 值，大部分實作使用 5381
  let hash = 5381
  for (let i = 0; i < key.length; i++) {
// 根據經驗值給個魔術數字 33
    hash = hash * 33 + key.charCodeAt(i)
  }
// 1013 為隨機質數
  return hash % 1013
}
