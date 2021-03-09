<template >
<span>
    <b>{{prefijo}}</b>
    {{Number(valor).toFixed(decimales)}}{{sufijo}}
</span>
</template>


<script>

export default {
   props: {
    valor: Number, 
    prefijo: {
      type: String,
      default: 'Precio: '
    }, 
    sufijo: {
      type: String,
      default: '€'
    }, 
    libras: Number,
    decimales: {
      type: Number,
      default: 2
    }
  },
}
</script>