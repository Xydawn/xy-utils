/* eslint-disable no-extend-native */
Object.defineProperty(Array.prototype, 'toTree', {
  value: function (config = { id: 'id', parentId: 'parentId' }) {
    let map = {}
    this.forEach((item) => {
      map[item[config.id]] = item
    })
    let val = []
    this.forEach((item) => {
      let parent = map[item[config.parentId]]
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
Object.defineProperty(Array.prototype, 'forEachTree', {
  value: function (callBack, children = 'children') {
    this.forEach((v) => {
      if (v[children]) {
        v[children].forEachTree(callBack, children)
      }
      callBack(v)
    })
  }
})

/*
* Tree结构倒序遍历，通过子类id返回所有父类id
* */
Object.defineProperty(Array.prototype, 'forEachTreeGetAllById', {
  value: function (value, callBack, id = 'id', parentId = 'parentId') {
    this.foEachTree(v => {
      if (v[id] === value) {
        callBack(v)
        if (v[parentId]) {
          this.forEachTreeGetAllById(v[parentId], callBack, id, parentId)
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
      const v = this[i]
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
