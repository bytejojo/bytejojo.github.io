<template>
  <div>
    <a-card>
      <p slot="title">我的GitHub:{{gitHubAccountInfo.name}}</p>
      <a-vatar :src="gitHubAccountInfo.avatar_url"/>
      <p>login:{{gitHubAccountInfo.login}}</p>
      <p>html_url:{{gitHubAccountInfo.html_url}}</p>
      <p>followers_url:{{gitHubAccountInfo.followers_url}}</p>
      <p>subscriptions_url:{{gitHubAccountInfo.subscriptions_url}}</p>
      <p>organizations_url:{{gitHubAccountInfo.organizations_url}}</p>
      <p>repos_url:{{gitHubAccountInfo.repos_url}}</p>
      <p>received_events_url:{{gitHubAccountInfo.received_events_url}}</p>
      <p>blog:{{gitHubAccountInfo.blog}}</p>
      <p>location:{{gitHubAccountInfo.location}}</p>
      <p>email:{{gitHubAccountInfo.email}}</p>
      <p>bio:{{gitHubAccountInfo.bio}}</p>
      <p>public_repos:{{gitHubAccountInfo.public_repos}}</p>
      <p>public_gists:{{gitHubAccountInfo.public_gists}}</p>
      <p>followers:{{gitHubAccountInfo.followers}}</p>
      <p>following:{{gitHubAccountInfo.following}}</p>
      <p>创建时间:{{gitHubAccountInfo.created_at}}</p>
      <p>更新时间:{{gitHubAccountInfo.updated_at}}</p>
      <Spin size="large" fix v-if="loading"></Spin>
    </a-card>
  </div>
</template>

<script>
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
          gitHubApi.get('/users/bytejojo', {
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
