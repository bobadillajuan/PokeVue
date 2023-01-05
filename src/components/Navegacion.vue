<template>

   <nav class="navbar navbar-expand-lg navbar-dark container-fluid text-center">

      <div class="col-4 col-md-2" id="titulo">
      <p class="col-12 col-md-2 mb-0 h3">Proyecto</p>
      </div>

      <button class="navbar-toggler col-3 col-md-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse col-12 col-md-4" id="navbarSupportedContent">
            <ul class="navbar-nav" id="listaEnlaces">
               <li class="nav-item active">
               <router-link to="/" class="link  text-decoration-none">Home</router-link>
               </li>
            </ul>
      </div>

   </nav>

</template>
<script>
export default {
  name: 'Navegacion',
};
</script>
<style>
    #titulo{ 
      color: rgb(126, 30, 182);
    }

    nav{
      background-color: black;
    }

</style>