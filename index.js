import './package/src/ArrayPrototype'
import './package/src/DatePrototype'

const install = function (Vue) {

}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
