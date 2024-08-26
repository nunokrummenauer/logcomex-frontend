<template>
  <nav>
    <router-link to="/order-list">Lista de Pedidos</router-link> |
    <router-link to="/order-chart">Gráfico de Pedidos</router-link> |
    <router-link to="/amount-chart">Gráfico de Preços</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #464646;
}

nav a.router-link-exact-active {
  color: #420f94;
}
</style>