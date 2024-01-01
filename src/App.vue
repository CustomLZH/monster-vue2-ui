<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
}
body {
  margin: 0;
}
.div_main {
  margin: 10px;
}
.el-dialog__body {
  padding: 15px 15px 10px 10px;
}
.el-dialog__footer {
  padding-right: 15px;
}
.el-dialog__header {
  background-color: #00b7c3;
}
.el-dialog__title, .el-dialog__headerbtn .el-dialog__close {
  color: #FFFFFF;
}
.el-dialog__headerbtn:hover {
  .el-dialog__close, i {
    color: #606266;
  }
}
.el-dialog__close:hover {
  color: #606266;
}
</style>
