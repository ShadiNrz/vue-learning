import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.$ = window.jQuery = require('jquery');
//for semantic ui
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

//for kendo ui
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

//for components of kendo ui
import { Chart,
  ChartSeriesItem,
  Sparkline,
  SparklineSeriesItem,
  StockChart,
  ChartInstaller } from '@progress/kendo-charts-vue-wrapper'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { MaskedTextBox,
  NumericTextBox,
  ColorPicker,
  Slider,
  RangeSlider,
  Switch,
  InputsInstaller } from '@progress/kendo-inputs-vue-wrapper'
  import { Button,
    ButtonGroup,
    ButtonGroupButton,
    ToolBar,
    ToolBarItem,
    ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'



Vue.use(SuiVue)
Vue.use(ChartInstaller)
Vue.use(GridInstaller)
Vue.use(InputsInstaller)
Vue.use(ButtonsInstaller)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
