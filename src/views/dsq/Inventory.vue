<!--
 * @Descripttion: (对该文件的信息描述)
 * @Author: CustomLZH
 * @Date: 2024-01-01 15:50:57
-->
<template>
  <div class="main_content">
    <el-row style="margin: 10px 0; text-align: end">
      <el-button type="primary" size="small" @click="search">查询</el-button>
    </el-row>
    <div class="table-div">
      <vxe-grid
        ref="tableRef"
        size="small"
        height="auto"
        show-overflow
        :row-config="{ height: 55, isHover: true, isCurrent: true }"
        :columns="columns"
        :data="tableData"
      >
        <template slot="handle" slot-scope=""></template>
        <template slot="icon" slot-scope="scope">
          <el-image
            v-if="scope.row.icon"
            style="width: 50px; height: 50px"
            :src="getUrl(scope.row)"
            fit="scale-down"
          />
        </template>
      </vxe-grid>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        url: require('@/assets/dsq/v.0.10.28.21172/article/iron-plate.png'),
        columns: [
          {
            title: '序号',
            type: 'seq',
            width: 50,
            align: 'center'
          },
          {
            field: 'icon',
            title: '清单图标',
            slots: {
              default: 'icon'
            },
            width: 100,
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
            field: 'make',
            title: '制造建筑',
            width: 100,
            align: 'center'
          },
          {
            field: 'speed',
            title: '制造速度',
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
        this.$api['dsq/inventory'].pageInventory({}).then(resp => {
          this.tableData = resp.data.data.records
        })
      },
      getUrl(row) {
        if (row.inventoryType === 1) {
          return require(`@/assets/dsq/v.0.10.28.21172/article/${row.icon}`)
        } else {
          return require(`@/assets/dsq/v.0.10.28.21172/architecture/${row.icon}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .table-div {
    height: calc(100vh - 70px);
  }
</style>
