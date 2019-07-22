<template>
  <div>
    <Row>
      <iCol span="11">
        <Divider orientation="left">留言输入</Divider>
        <Input prefix="ios-contact" v-model="name" clearable placeholder="请输入联系人名称"/>
        <br/>
        <br/>
        <Input prefix="ios-call" v-model="mobile" clearable placeholder="请输入联系人电话"/>
        <br/><br/>
        <Input prefix="ios-mail" v-model="email" clearable placeholder="请输入联系人邮箱"/>
        <br/><br/>
        <Input type="textarea" v-model="message" clearable placeholder="欢迎留言"/>
      </iCol>
      <!--<Divider type="vertical" class="divider"/>-->
      <iCol span="2" class="divider-container"><Divider type="vertical" class="divider"/></iCol>
      <iCol span="11">
        <Divider orientation="left">留言展示</Divider>
        <Input prefix="ios-contact" v-model="name" readonly placeholder="请输入联系人名称"/>
        <br/>
        <br/>
        <Input prefix="ios-call" v-model="mobile" readonly placeholder="请输入联系人电话"/>
        <br/><br/>
        <Input prefix="ios-mail" v-model="email" readonly placeholder="请输入联系人邮箱"/>
        <br/><br/>
        <Input type="textarea" v-model="message" readonly placeholder="欢迎留言"/>
      </iCol>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'BBS',
    data() {
      return {
        name: '',
        mobile: '',
        email: '',
        message: ''
      }
    }
  }
</script>

<style scoped>
  .divider-container {
    text-align: center;
  }
  .divider {
    height: 300px;
  }
</style>
