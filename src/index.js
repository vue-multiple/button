import Button from './components/button.vue'
import ButtonGroup from './components/button-group.vue'
import './styles/less/index.less'

const install = function (Vue, opts = {}) {
	if (install.installed) return
	Vue.component('VmButton', Button)
	Vue.component('VmButtonGroup', ButtonGroup)
}

if (typeof window !== 'undefined' && window.Vue) {
	Vue.component('VmButton', Button)
	Vue.component('VmButtonGroup', ButtonGroup)
}

export { Button, ButtonGroup }
