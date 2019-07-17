<template>
  <div id="app">
    <Ribbon/>
    <Layout>
      <div is="Nav"></div>
      <div is="Banner"></div>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <div is="Content">
        <router-view/>
      </div>
      <div is="CFooter"></div>
    </Layout>
  </div>
</template>

<style lang="less">
</style>

<script>
  import Ribbon from "@/views/Ribbon"
  import Nav from "@/components/Nav"
  import Banner from "@/components/Banner"
  import CFooter from "@/components/CFooter"

  export default {
    components: {Ribbon,Nav,Banner,CFooter}
  }
</script>
