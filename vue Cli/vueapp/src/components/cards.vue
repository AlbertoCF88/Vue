<template >
<div class="card">
  <img :src="imagen" :alt="name">
  <div class="container">
    <h4><b>{{name}}</b></h4>
    <p>{{desc}}</p>
    <button class="btn btn-danger" v-on:click="$emit('add', curso)">Añadir
    </button>
    <price :valor="elprecio"></price>
  </div>
</div>
</template>


<script>
import price from "./price";
export default {
name:"cards",
   components: {price},
   props: ['name', 'id', 'desc','imagen', 'elprecio', 'curso'],
}
</script>