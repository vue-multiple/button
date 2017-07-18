import Vue from 'vue'
import App from './App.vue'

import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

import Icon from 'vue-multiple-icon'
import 'vue-multiple-icon/lib/icon.css'
Vue.component(Icon.name, Icon)

import { Button, ButtonGroup } from '../../src/index.js'
Vue.component(Button.name, Button)
Vue.component(ButtonGroup.name, ButtonGroup)

new Vue({
    el: '#app',
    render: h => h(App)
})
