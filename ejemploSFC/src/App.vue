<template>
  <!--Nombre de  Componente principal
  me resulta práctico definir dentro de los template un div con su id y así
  facilitar el manejo de los demás componentes minimizando errores
  -->
  <div id="app">
  <!-- Carga de image-->
    <img src="/dist/assets/img/radarez_escudo.png">
    <h1>{{ msg }}</h1>
    <a href="#" @click="saludo">Saludar</a>

  </div>
</template>

<script>
/*Aqui escribimos nuestro codigo Vue.js*/
export default {
  name: 'app',
  data () {
    return {
      msg: 'Bienvenid@ a mis apuntes de VUE.JS desde Radarez'
    }
  },
  methods:{
    /*Metodos... */
    saludo(){
      alert("Bienvenid@")
    }
  }
}
</script>

<style>
/*Los estilos CSS que se aplicaran a todos los componentes del proyecto <style>
Si le agregamos a style el atributo scoped los estilos tendran un alcance solo en el archivo donde se encuentren <style scoped>
*/
body{
  background-color:#071C3F;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
