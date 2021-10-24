<template>
<div id="Post">

      <h1 v-text="tituloentrada"></h1>
      <router-link v-bind:to="paginar(false)">Anterior</router-link> -
      <router-link v-bind:to="paginar(true)">Siguiente</router-link> -
      <router-link v-bind:to="{name: 'articulo'}"> Ver Articulo </router-link>
      <router-view></router-view>


</div>
</template>

<script>
export default{
    methods:{
      paginar(siguiente){
      let entrada = parseInt(this.$route.params.entrada);
      if(siguiente){
         return entrada < 10 ? `/post/${ entrada + 1}` : `/post/${entrada}`
      }
      else{
         return entrada > 1 ? `/post/${ entrada - 1}` : `/post/${entrada}`
      }// fin else

    },//Fin paginar

    },//Fin methods

    computed: {
        tituloentrada(){
          return `Entrada ${this.$route.params.entrada} del Blog`
        }, //fin tituloentrada
    }, //fin computed
}//fin export
</script>

<style scoped>
#Post{
padding-top: 100px;
}
</style>
