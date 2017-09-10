<template>
  <!--高速版-->
  <div id="SOHUCS" sid="{{id}}"></div>
</template>
<script>
  export default {
    props:{
      id: {
        type:String
      }
    },
    ready(){
      window.changyan.api.config({
        appid: 'cytcWetJR',
        conf: 'prod_da07b8cf59b89bbe35d1d764199965b2'
      });
    }
  }
</script>
