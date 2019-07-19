<template>
  <div>
    <Input prefix="ios-contact" v-model="name" clearable placeholder="请输入联系人名称"/>
    <br/>
    <br/>
    <Input prefix="ios-phone" v-model="mobile" clearable placeholder="请输入联系人电话"/>
    <br/><br/>
    <Input prefix="ios-email" v-model="email" clearable placeholder="请输入联系人邮箱"/>
    <br/><br/>
    <Input type="textarea" v-model="message" clearable placeholder="欢迎留言"/>
  </div>
</template>

<script>
export default {
  name: 'BBS',
  data () {
    return {
      name: '',
      mobile: '',
      email: '',
      textarea: '',
    }
  }
}
</script>

<style scoped>

</style>
