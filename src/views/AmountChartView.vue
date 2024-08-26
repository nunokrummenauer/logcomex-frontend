<template>
  <div class="amount-chart">
    <img alt="Logcomex logo" src="../assets/logcomex.png">
    <AmountChart msg="Gráfico de Preços"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AmountChart from '@/components/AmountChart.vue'

export default {
  name: 'AmountChart',
  components: {
    AmountChart
  }
}
</script>
