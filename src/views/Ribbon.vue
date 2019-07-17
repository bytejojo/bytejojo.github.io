<template>
  <Ribbons :class="className" :title="title" :href="href"/>
</template>

<script>
  import Ribbons from "@/components/Ribbons"

  export default {
    name: 'Ribbon',
    components: {Ribbons},
    data() {
      return {
        title: 'Fork me on GitHub',
        href: 'https://github.com/happyzero',
        className: 'right-bottom'
      }
    }
  }
</script>

<style scoped>

</style>
