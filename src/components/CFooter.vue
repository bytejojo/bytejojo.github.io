<template>
  <Footer>
    <Row class="footer">
      <iCol span="5" offset="2">
        456
      </iCol>
      <iCol span="5">
        456
      </iCol>
      <iCol span="5">
        789
      </iCol>
      <iCol span="5">
        456
      </iCol>
      <iCol span="2"><br/></iCol>
    </Row>
    <Row class="copyright">
      <p>遵循 <a :href="license.href">{{license.description}}</a></p>
      <p>{{copyright}}</p>
    </Row>

    <BackTop :height="100" :bottom="200">
      <div class="backTop">返回顶端</div>
    </BackTop>

  </Footer>
</template>

<script>
  export default {
    name: 'CFooter',
    data() {
      return {
        license: {
          description: 'MIT 开源协议',
          href: 'https://opensource.org/licenses/MIT'
        },
        copyright: 'Copyright © 2019-2019 Lucas Hao'
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
