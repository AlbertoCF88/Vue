var data = {
el: '#example-3',
    ver: false,
    preciomax :999 ,//muestra todos los cursos
    cesta:[],
    añadeProducto:true,/*oculta texto cesta */
    VerCurso:true,
    VerMaterial:false,


    total:"",
cursos: [
    {
      "id":1,
      "name": "Curso Wordpress",
      "imagen": "IMG/wordpress.jpg",
      "desc": "El curso más potente para aprender todo lo necesario sobre Wordpress",
      "precio": 110.10,
      "stock":"",
      "color":null,
    },
    {
      "id":2,
      "name": "Curso Front End",
      "imagen": "IMG/fullstack.jpg",
      "desc": "El curso más potente para aprender todo lo necesario sobre Frontend ",
      "precio": 220.20,
      "stock":"",
      "color":null,
    } ,
    {
      "id":3,
      "name": "Curso Fullstack",
      "imagen": "IMG/frontend.jpg",
      "desc": "El curso más potente para aprender todo lo necesario sobre Frontend y Backend ",
      "precio": 420,
      "stock":"",
      "color":null,
    } ,
    { 
      "id":4,
      "name": "Curso SEO",
      "imagen": "IMG/seo.png",
      "desc": "El curso más potente para aprender todo lo necesario sobre SEO y posicionamiento Web",
      "precio": 300,
      "stock":"",
      "color":null,
    } 
  ],
materialEscolar:[
    {
        "id":1,
        "name": "Bolígrafos",
        "imagen": "IMG/bolis.jpg",
        "desc": "Bolígrafos personalizados",
        "precio": 1,
        "stock":"",
        "color":null,
      },
      {
        "id":2,
        "name": "subcarpeta",
        "imagen": "IMG/subcarpeta.jpg",
        "desc": "Subcarpeta Exacompta din A4",
        "precio": 3,
        "stock":"",
        "color":null,
      },
      {
        "id":3,
        "name": "Gomas",
        "imagen": "IMG/gomas.jpg",
        "desc": "Gomas 430",
        "precio": 1.20,
        "stock":"",
        "color":null,
      },
      {
        "id":4,
        "name": "Papel",
        "imagen": "IMG/papel.jpg",
        "desc": "Papel Din A4 80gr 500 Hojas",
        "precio": 5.5,
        "stock":"",
        "color":null,
      },
  ]
}
var app = new Vue({
el: '#app',
    filters:{
        moneda:function (valor) {  
          return Number.parseFloat(valor).toFixed(2) + "€";
         },
        dosDigitos(value, pattern = ""){ // dos digitos
          return value.toString().padStart(2,pattern)
       }
      },
    methods:{
        enlaceCurso:function(){
            this.VerCurso=true; 
            this.VerMaterial= false;
            return  this.VerCurso, this.VerMaterial
        },
        enlaceMaterial:function(){
            this.VerCurso=false; 
            this.VerMaterial=true;
            return  this.VerCurso, this.VerMaterial
        },
        agregarCesta:function(curso){
            /*al crear una array dentro del array debe ser cambiado en la vista*/
            var prodExistente;
            var exitente;
            exitente = this.cesta.filter(function (item,index) { 
              if(item.curso.id == Number(curso.id)){
                prodExistente = index;
                return true;
              }else {
                return  false;
              }
            });    
            if(exitente.length){
               this.cesta[prodExistente]
            }else{
               this.cesta.push({curso:curso})
            }
            /*filtro pra no repetir cursos*/
        },
        random:function(curso){
            /*de forma random me pone si esta o no es stock y su color (cambia el stock según clicas el boton aunque  no agregues elementos en la cesta)*/
            var  colorStock
            var dado=  Math.floor(Math.random()* 2)+1; 
            console.log(`ramdon ${dado}`)
            if(dado==2){
              colorStock=true
              dado ="En stock";
              curso.stock=dado;
              curso.color= colorStock;
             /*    materialmaterial.stock=dado;
                material.color= colorStock; */
              console.log(`color ${colorStock}`)
              return dado,colorStock
            }else{
              colorStock=false
              dado = "Sin stock"
              curso.stock=dado;
              curso.color= colorStock;
                // materialmaterial.stock=dado;
                // material.color= colorStock;
              console.log(`color ${colorStock}`)
              return dado,colorStock
            }
        },

    },
    data: data,
})