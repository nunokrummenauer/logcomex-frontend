import { createRouter, createWebHashHistory } from 'vue-router'
import OrderListView from '../views/OrderListView.vue'
import OrderChartView from '../views/OrderChartView.vue'
import AmountChartView from '../views/AmountChartView.vue'

const routes = [
  {
    path: '/order-list',
    name: 'order-list',
    component: OrderListView
  },
  {
    path: '/order-chart',
    name: 'order-chart',
    component: OrderChartView
  },
  {
    path: '/amount-chart',
    name: 'amount-chart',
    component: AmountChartView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
