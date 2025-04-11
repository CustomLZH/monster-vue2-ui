<!--
 * @Descripttion: (对该文件的信息描述)
 * @Author: CustomLZH
 * @Date: 2022-12-31 15:54:18
-->
<template>
  <div class="main_content">
    <el-container>
      <el-header style="background-color: #e1f3d8">头部</el-header>
      <el-container>
        <el-aside class="aside" width="200px">
          <el-menu
            default-active="2"
            class="menu"
            background-color="#d9ecff"
            :router="true"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>未分类</span>
              </template>
              <el-menu-item-group>
                <template slot="title">戴森球计划</template>
                <el-menu-item index="/dsq/inventory">基础清单</el-menu-item>
                <el-menu-item index="/dsq/recipe">配方清单</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="系统设置">
                <el-menu-item index="/system/enumerate">枚举配置</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view :key="key" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {}
    },
    computed: {
      key() {
        return this.$route.path
      }
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .menu {
    height: calc(100vh - 60px);
  }
</style>
