import Button from './components/button.vue'
import ButtonGroup from './components/button-group.vue'
import './styles/less/index.less'

const install = function (Vue, opts = {}) {
	if (install.installed) return
	Vue.component('VmButton', Button)
	Vue.component('VmButtonGroup', ButtonGroup)
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export { Button, ButtonGroup }

export default {
  install,
  Button,
  ButtonGroup
}
