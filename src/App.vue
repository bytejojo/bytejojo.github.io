<template>
  <div id="app">
    <Ribbon/>
    <a-layout theme="light">
      <div is="Navigation"/>

      <div is="Banner"/>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <a-layout-footer>
        <div is="CFooter"></div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="less">
#app{
  height: 100%;
}
</style>

<script>
import Ribbon from "@/views/Ribbon"
import Navigation from "@/components/Navigation"
import Banner from "@/components/Banner"
import CFooter from "@/components/CFooter"

export default {
  components: {Ribbon, Navigation, Banner, CFooter}
}
</script>
