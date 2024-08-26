<template>
  <div class="order-chart">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'OrderChart',
  props: {
    msg: String
  },
  data (): {
        return {
            orders: null
        }
  },
  mounted () {
    axios
      .get('http://localhost:8989')
      .then(response => (this.orders = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
