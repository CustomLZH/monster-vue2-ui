<!--
 * @Descripttion: (对该文件的信息描述)
 * @Author: CustomLZH
 * @Date: 2024-01-01 17:42:24
-->
<template>
  <div class="main_content">
    <el-row style="margin: 10px 0; text-align: end">
      <el-button type="primary" size="small" @click="search">查询</el-button>
      <el-button type="primary" size="small" @click="add">新增</el-button>
    </el-row>
    <vxe-grid
      ref="tableRef"
      size="small"
      :row-config="{ isHover: true, isCurrent: true }"
      :columns="columns"
      :data="tableData"
    >
      <template slot="handle" slot-scope=""></template>
    </vxe-grid>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        columns: [
          {
            title: '序号',
            type: 'seq',
            width: 50,
            align: 'center'
          },
          {
            field: 'inventoryName',
            title: '清单名称',
            minWidth: 100,
            align: 'left'
          },
          {
            field: 'inventoryType',
            title: '清单类型',
            width: 100,
            align: 'center'
          },
          {
            field: 'recipeName',
            title: '配方名称',
            width: 100,
            align: 'center'
          },
          {
            field: 'model',
            title: '模式',
            width: 100,
            align: 'center'
          },
          {
            field: 'efficiency',
            title: '效率',
            width: 100,
            align: 'center'
          },
          {
            field: 'unitTime',
            title: '单位时间',
            width: 100,
            align: 'center'
          }
        ],
        tableData: []
      }
    },
    computed: {},
    watch: {},
    created() {
      this.init()
    },
    mounted() {},
    methods: {
      init() {
        this.search()
      },

      search() {
        this.$api['dsq/recipe'].list({}).then(resp => {
          this.tableData = resp.data.data
        })
      },
      add() {}
    }
  }
</script>
<style lang="scss" scoped></style>
