<template>
  <div>
    <Card>
      <p slot="title">我的GitHub</p>
      <Avatar :src="gitHubAccountInfo.avatar_url"/>
      <p>创建时间:{{gitHubAccountInfo.created_at}}</p>
      <p>更新时间:{{gitHubAccountInfo.updated_at}}</p>
      <Spin size="large" fix v-if="loading"></Spin>
    </Card>
  </div>
</template>

<script>
  import utils from '../lib/util'
  export default {
    name: 'Learn',
    data() {
      return {
        loading: false,
        gitHubAccountInfo: ''
      }
    },
    created() {
      this.getGitHubAccountInfo();
    },
    methods: {
      getGitHubAccountInfo: function () {

        const gitHubApi = this.$axios.create({
          baseURL: 'https://api.github.com'
        });
        // Alter defaults after instance has been created
        gitHubApi.defaults.timeout = 2000;
        this.loading = true;
        gitHubApi.get('/users/happyzero', {
            params: {
              access_token: ''+utils.aesDecrypt('VTJGc2RHVmtYMTgwSVducUs4aGtZU3pwWk05ZlF5d0RXZ2hjWXdmcHBSbVhENlVIdG5BTlhhY0xiZ1JzbW9Md1lkZnVCU3hYSDFIQ0U1OUVrT0xXdkE9PQ==')
            },
            headers: {
              'Accept': 'application/vnd.github.v3+json'
            }
          }
        ).then((response) => {
          this.gitHubAccountInfo = response.data;
        }).catch(error => {
          if (error.response) {
            // 发送请求后，服务端返回的响应码不是 2xx
            console.error(error.response.status+'-'+error.message,JSON.stringify(error.response.data)+'<br/>'+JSON.stringify(error.response.headers));
            this.error(error.response.status+'-'+error.message,JSON.stringify(error.response.data)+'<br/>'+JSON.stringify(error.response.headers));
          } else if (error.request) {
            // 发送请求但是没有响应返回
            this.error('出现错误',error.message);
          } else {
            // 其他错误
            this.error('其它错误', error.message);
          }
        }).finally(() => this.loading = false);
      },
      error: function (noticeTitle, noticDescription) {
        this.$Notice.error({
          title: noticeTitle ? noticeTitle : '错误',
          desc: noticDescription ? noticDescription : '出现错误。'
        });
      }
    }
  }
</script>

<style scoped>

</style>
