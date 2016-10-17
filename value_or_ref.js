var outerObj = {
    prop: 1
};

function myFunc(obj) {
  obj.prop = 5;
  console.log(obj.prop); // 5
}

myFunc(outerObj);
console.log(outerObj.prop); // 5，值被修改了，明明就是傳參考!!!!!
