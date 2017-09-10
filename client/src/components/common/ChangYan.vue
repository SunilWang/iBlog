<template>
  <!--高速版-->
  <div id="SOHUCS" sid="{{id}}"></div>
  <script charset="utf-8" type="text/javascript" src="//changyan.sohu.com/upload/changyan.js" ></script>
  <script type="text/javascript">
    window.changyan.api.config({
      appid: 'cytcWetJR',
      conf: 'prod_da07b8cf59b89bbe35d1d764199965b2'
    });
  </script>
</template>
<script>
  export default {
    props:{
      id: {
        type:String
      }
    }
  }
</script>
