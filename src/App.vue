<template>
  <div id="app">
      <router-view />
  </div>
  
  
</template>

<script>
// import Games from './components/Games'
import * as jQuery from 'jquery'
window['jQuery'] = jQuery;
export default {
  name: 'App',
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Roboto&display=swap');
  :root{
    --main-color: #F5BD57;
    --blue-color : #1059FF;
  }
  body{
    background-color: var(--main-color)!important;
    width:100%;
    height:100%;
    position:relative;
  }
  a{
    text-decoration: none!important;
    cursor:pointer;
  }

</style>
