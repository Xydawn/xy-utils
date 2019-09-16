Array.prototype.toTree = function(sid = 'id', spid = 'pid') {
  this.forEach((item) => {
    delete item.children
  })
  let map = {}
  this.forEach((item) => {
    map[item[sid]] = item
  })
  let val = []
  this.forEach((item) => {
    let parent = map[item[spid]]
    if (parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      val.push(item)
    }
  })
  return val
}
/*
* 遍历Tree结构所有内容
* */
Array.prototype.foEachTree = function(callBack, children = 'children') {
  this.forEach((v) => {
    if (v[children]) {
      v[children].foEachTree(callBack, children)
    }
    callBack(v)
  })
}

/*
* Tree结构倒序遍历，通过子类id返回所有父类id
* */
Array.prototype.forEachTreeGetAllById = function(value, callBack, id = 'id', pid = 'pid') {
  this.foEachTree(v => {
    if (v[id] === value) {
      callBack(v)
      if (v[pid]) {
        this.forEachTreeGetAllById(v[pid], callBack，id, pid)
      }
    }
  })
}
