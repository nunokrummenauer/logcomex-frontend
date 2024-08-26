<template>
  <div class="order-chart">
    <img alt="Logcomex logo" src="../assets/logcomex.png">
    <OrderChart msg="Gráfico de Pedidos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OrderChart from '@/components/OrderChart.vue'

export default {
  name: 'OrderChart',
  components: {
    OrderChart
  }
}
</script>
