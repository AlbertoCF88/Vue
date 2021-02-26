var app = new Vue({
    el:'#app',
    data:{
        lista:false,
        showModal: false,
        checked: false,
        usuarios:false,
        contador: [],
        url:'Introduce texto',
        ojo:false,
    },
    computed:{ //Son pequeños filtros //https://es.vuejs.org/v2/guide/migration.html#Replacing-the-json-Filter
        urls: function(){
            return this.url
            .toLowerCase()//minusculas todos
            .replace(/[^\w]+/g,'_') //sin caracteres especiales y espacios por barra baja
            // . replace(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/)
          }
    },
    //metodos methods es de vue para crear eventos
    methods:{
        seleccionarTodos: function(){
            this.contador = [];
            this.checked = true
                  for ( usuario in this.usuarios) {
                      this.contador.push(this.usuarios[usuario].name);
                  }
            },  
        borrar: function(){
            this.checked = false;
            this.contador=[];
        },
        vaciar:function(){
            this.url ='';//Para limpiar valor input
        },
        borrarPersona:function(nombre,contador){
         this.contador.splice(nombre);
            console.log(` nombre ${nombre}`)
        },
    },
    //mounted comando viu
    mounted:function(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response .json())//ya podemos trabjar con un archivo json (parseado)
        .then(data => {
            this.usuarios = data;
        })
    }
})
