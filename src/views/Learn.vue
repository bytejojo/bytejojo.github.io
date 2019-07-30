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
              access_token: '64f3a63a247153449fd1bca51d3c7ce849adf2f9'
            },
            headers: {
              'Accept': 'application/vnd.github.v3+json'
            }
          }
        ).then((response) => {
          this.gitHubAccountInfo = response.data;
        }).catch(error => {
          this.error('加载GitHub信息错误',error.message);
        }).finally(() => this.loading = false);
      },
      error: function (noticeTitle, noticDescription) {
        this.$Notice.error({
          title: noticeTitle ? '' : '错误',
          desc: noticDescription ? '' : '出现错误。'
        });
      }
    }
  }
</script>

<style scoped>

</style>
