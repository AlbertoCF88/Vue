
<template>
<div id="app" class="container">
    <div class="dropdown">
   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Cesta: 
      <span class="badge  bg-primary">{{cantTotal}}</span>
    </button>
    <div  class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <div v-for="(cursoCesta, index) in cesta" :key="index">
      <li class="dropdown-item" href="#">
        <span class="badge bg-success">{{cursoCesta.cant}}</span>
        {{cursoCesta.curso.name}} {{cursoCesta.cant * cursoCesta.curso.precio}} <a href="#" @click.stop="quitarCesta(index)" class="btn btn-danger">-</a> </li>      
        </div>
      <a class="dropdown-item" href="#"><b>Total:</b> {{cestaTotal}}</a>
    </div>
  </div>

    <cards
      v-for="curso in cursos"
      :curso="curso"
      :key="curso.id"
      :name="curso.name"
      :imagen="curso.imagen"
      :elprecio="curso.precio"
      :desc="curso.desc" @add="agregarCesta">
    </cards>
</div>
</template>

<script>

import cards from "./components/cards.vue";

export default {
  name: "App",
  data: function(){
    return{
        ver: true,
  selected: '450',
  cesta: [],
  cursos: []
    }
  },
  created(){
    fetch("http://localhost:3000/cursos")
    .then(response => response.json())
    .then(data => {
      this.cursos = data;
    })
  },
      computed: {
        cestaTotal: function(){
          let suma = 0;
          for (this.key in this.cesta){
            suma = suma+this.cesta[this.key].curso.precio * this.cesta[this.key].cant;
          }
          return suma
        },
        cantTotal: function(){
          let cant = 0;
          for (this.key in this.cesta){
            cant = cant+ this.cesta[this.key].cant;
          }
          return cant
        }
      },
      methods: {
        agregarCesta: function(curso){
         var prodExistente;
         var exitente = this.cesta.filter(function(item, index){
           if (item.curso.id == Number(curso.id)){
             prodExistente = index;
             return true;
           }else{
             return false;
           }
         });
          
          if(exitente.length){
            this.cesta[prodExistente].cant++
          }else{
            this.cesta.push({curso: curso, cant:1})
          }
        },
        quitarCesta: function(curso){
          if(this.cesta[curso].cant>1){
            this.cesta[curso].cant--;
          }else{
            this.cesta.splice(curso, 1)
          }
        }
      },
  components: {
    cards
  }
};
</script>

<style>

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: 350px;
  margin: 15px; 
  padding-bottom: 15px
}
.btn{
  margin: 5px;
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
  height: 200px;
  width: 350px;

}
/* Add some padding inside the card container */

.form-control{
  max-width: 385px;
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 1s ease-in-out;
}
  
</style>
