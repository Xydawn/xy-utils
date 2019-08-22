import './package/src/ArrayPrototype'
import './package/src/DatePrototype'
import RequestData from './package/src/RequestData'

const install = function(Vue) {
  Vue.prototype.$RequestData = RequestData
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { RequestData, install }

