<template>
  <div id="app">

    <a-layout theme="light">
      <div is="Header"/>

      <!-- component matched by the route will render here -->
      <a-layout-content class="content">
        <!-- route outlet -->
        <router-view/>
      </a-layout-content>

      <a-back-top :height="100" :bottom="200">
        <div class="backTop">返回顶端</div>
      </a-back-top>

      <div is="Footer"/>
    </a-layout>
    <Ribbon/>
  </div>
</template>

<style lang="less">
#app {
  height: 100%;
}

.content {
  height: 100%;
}

.backTop {
  padding: 10px;
  background: rgba(0, 153, 229, .7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}

#app {
  text-align: center;
}

#app .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 200px;
}

#app > .ant-layout {
  margin-bottom: 4px;
}

</style>

<script>
import Ribbon from "@/views/Ribbon"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {Ribbon, Header, Footer}
}
</script>
