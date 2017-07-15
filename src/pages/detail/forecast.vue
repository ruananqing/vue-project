<template>
  <div>forecast</div>
</template>

<script>
  export default {
    data () {
      return {
        versionList: [
          {
            label: '纸质报告',
            value: 0
          },
          {
            label: 'pdf',
            value: 1
          },
          {
            label: '页面报告',
            value: 2
          },
          {
            label: '邮件',
            value: 3
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
