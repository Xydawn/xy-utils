export default class RequestData extends Object {

  constructor(obj) {
    super()
    this._reload = obj
    this.setData(obj)
  }

  setData(obj) {

    for (let key in obj) {
      this[key] = obj[key]
    }
  }

  reload() {
    this.setData(this._reload)
  }

  getRules() {
    let rules = {}
    for (let key in this._reload) {
      rules[key] = [{ required: true, message: '此项必填', trigger: 'blur' }]
    }
    return rules
  }

}
