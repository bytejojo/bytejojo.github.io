<template>
  <div>
    <a-row class="footer">

    </a-row>
    <a-row class="copyright">
      <p>遵循 <a :href="license.href">{{license.description}}</a></p>
      <p v-html="copyright"></p>
    </a-row>

    <a-back-top :height="100" :bottom="200">
      <div class="backTop">返回顶端</div>
    </a-back-top>

  </div>
</template>

<script>
  export default {
    name: 'CFooter',
    data() {
      return {
        license: {
          description: this.$store.state.license.description,
          href: this.$store.state.license.href
        },
        copyright: this.$store.state.copyright
      }
    }
  }
</script>

<style scoped>
  .footer {
    text-align: center;
    color: #fff;
    background: transparent;
    height: 100px;
  }
  .copyright {
    text-align: center;
    color: #fff;
    background: transparent;
  }

  .copyright a{
    text-align: center;
    color: #fff;
    background: transparent;
  }

  .backTop{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }

</style>
