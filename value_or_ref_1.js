var outerObj = {
    prop: 1
};

var outerValue = 1; // outerValue -----> 物件(1)

function myFunc(value, obj) {
  value = 5; // 將value數值複製一份後傳進函式
  obj.prop = 5; // 複製一個物件參考傳進函式，並指到物件，將屬性prop由1改為5

  console.log('innerValue: ' + value); // 5
  console.log('innerObj:' + obj.prop); // 5

  obj = { // 重新將obj這個物件參考指到新物件 obj ------> new Object();
    prop: 10
  };
}

myFunc(outerValue, outerObj);
console.log('outerValue:' + outerValue); // 1
console.log('outerObj:' + outerObj.prop); // 5
