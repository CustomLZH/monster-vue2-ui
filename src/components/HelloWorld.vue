<template>
  <div class="hello">
    <el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    init () {
      console.log(this.msg);
    },
  },
};
</script>

<style scoped>

</style>
