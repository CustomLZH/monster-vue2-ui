<!--
 * @Descripttion: (对该文件的信息描述)
 * @Author: CustomLZH
 * @Date: 2022-12-31 16:11:31
-->
<template>
  <div class="div_main">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="50%">
          <vxe-grid
            ref="vxeTypeRef"
            :border="true"
            :columns="typeColumns"
            :data="typeData">
              <template slot="handle" slot-scope="scope">

              </template>
          </vxe-grid>
        </el-aside>
        <el-main>
          <vxe-grid
            ref="vxeDataRef"
            :border="true"
            :columns="dataColumns"
            :data="infoData">
              <template slot="handle" slot-scope="scope">

              </template>
          </vxe-grid>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      typeData: [],
      infoData: [],
      typeColumns: [
        {
          title: '序号',
          type: 'seq',
          width: 50,
          align: 'center',
        },
        {
          field: 'enumerateType',
          title: '枚举类型',
          minWidth: 100,
          align: 'center',
        },
        {
          field: 'enumerateName',
          title: '枚举名称',
          width: 120,
          align: 'center',
        },
        {
          field: 'remark',
          title: '备注',
          minWidth: 200,
          align: 'left',
        },
        {
          field: 'handle',
          title: '操作',
          width: 120,
          align: 'center',
          slots: {
            default: 'handle',
          },
        },
      ],
      dataColumns: [
        {
          title: '序号',
          type: 'seq',
          width: 50,
          align: 'center',
        },
        {
          field: 'enumerateKey',
          title: '键值',
          minWidth: 100,
          align: 'center',
        },
        {
          field: 'enumerateLabel',
          title: '描述',
          width: 120,
          align: 'center',
        },
        {
          field: 'sort',
          title: '排序',
          width: 50,
          align: 'center',
        },
        {
          field: 'handle',
          title: '操作',
          width: 120,
          align: 'center',
          slots: {
            default: 'handle',
          },
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {},
};
</script>
<style lang="scss" scoped>

.div_main {
  padding: 0 100px;
}

.div_main .el-main {
  padding: 0 0 0 10px;
}
</style>
