Object.defineProperty(Array.prototype, 'toTree', {
  value: function (sid = 'id', spid = 'pid') {
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
})

/*
* 遍历Tree结构所有内容
* */
Object.defineProperty(Array.prototype, 'foEachTree', {
  value: function (callBack, children = 'children') {
    this.forEach((v) => {
      if (v[children]) {
        v[children].foEachTree(callBack, children)
      }
      callBack(v)
    })
  }
})

/*
* Tree结构倒序遍历，通过子类id返回所有父类id
* */
Object.defineProperty(Array.prototype, 'forEachTreeGetAllById', {
  value: function (value, callBack, id = 'id', pid = 'pid') {
    this.foEachTree(v => {
      if (v[id] === value) {
        callBack(v)
        if (v[pid]) {
          this.forEachTreeGetAllById(v[pid], callBack, id, pid)
        }
      }
    })
  }
})

/*
 * 移除某个元素
 */

Object.defineProperty(Array.prototype, 'removeObject', {
  value: function (value) {
    for (var i = 0; i < this.length; i++) {
      let v = this[i]
      if (value instanceof Object) {
        if (v == value) {
          this.remove(i)
          break
        }
      }
    }

  }
})
/*
 * 通过index移除某个元素
 */
Object.defineProperty(Array.prototype, 'remove', {
  value: function (index) {
    this.splice(index, 1)
  }
})
