import Vue from 'vue' //Importamos vue framework desde el directorio node_modules
import App from './App.vue' //App.vue lo podemos ver como un componente contenedor de los demás componentes

new Vue({
  el: '#app',//Nombre del template principal
  render: h => h(App) //Renderización de aplicación
})
