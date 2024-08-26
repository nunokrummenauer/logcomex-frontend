<template>
  <div class="order-list">
    <img alt="Logcomex logo" src="../assets/logcomex.png">
    <OrderList msg="Listagem de Pedidos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OrderList from '@/components/OrderList.vue'

export default {
  name: 'OrderList',
  components: {
    OrderList
  }
}
</script>
