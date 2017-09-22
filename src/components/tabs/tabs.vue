<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">option A</mt-tab-item>
      <mt-tab-item id="2">option B</mt-tab-item>
      <mt-tab-item id="3">option C</mt-tab-item>
    </mt-navbar>

  </div>


</template>

<script>
  import { Navbar, TabItem } from 'mint-ui'
  export default {
    data(){
      return {
        selected: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
