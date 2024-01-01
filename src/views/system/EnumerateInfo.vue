<!--
 * @Descripttion: (对该文件的信息描述)
 * @Author: CustomLZH
 * @Date: 2022-12-31 16:11:31
-->
<template>
  <div class="div_main">
    <el-container>
      <el-header height="50px">
        <div class="div-header">
          <el-form ref="form" :inline="true" size="small" :model="searchForm">
            <el-form-item>
              <el-input v-model="searchForm.enumerateNameOrType" placeholder="请输入枚举类型/名称">
                <el-button slot="append" type="primary" @click="search" icon="el-icon-search"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="add">新增</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-header>
      <el-container>
        <el-aside width="50%">
          <vxe-grid
            ref="vxeTypeRef"
            :border="true"
            size="small"
            :row-config="{isHover: true, isCurrent: true}"
            :columns="typeColumns"
            :data="typeData"
            @cell-click="cellClick">
              <template slot="handle" slot-scope="scope">

              </template>
          </vxe-grid>
        </el-aside>
        <el-main>
          <vxe-grid
            ref="vxeDataRef"
            :border="true"
            size="small"
            :columns="dataColumns"
            :data="infoData">
              <template slot="handle" slot-scope="scope">

              </template>
          </vxe-grid>
        </el-main>
      </el-container>
    </el-container>
    <enumerate-form ref="enumerateFormRef" @close="search"></enumerate-form>
  </div>
</template>

<script>
import EnumerateForm from '@/components/system/EnumerateForm';
export default {
  components: {EnumerateForm},
  props: {},
  data () {
    return {
      typeData: [],
      infoData: [],
      searchForm: {
        enumerateNameOrType: '',
      },
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
          minWidth: 80,
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
          title: '键名',
          minWidth: 100,
          align: 'center',
        },
        {
          field: 'enumerateLabel',
          title: '键值',
          minWidth: 80,
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
  methods: {

    init () {
      this.search();
    },

    cellClick (data) {
      console.log(data);
    },
    search () {
      this.$api['enumerate/enumerateType'].getEnumerateTypePage({}).then((resp) => {
        this.typeData = resp.data.records;
      });
    },

    // 新增弹窗
    add () {
      this.$refs.enumerateFormRef.open();
    },
  },
  created () {
    this.init();
  },
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

.div_main .el-header {
  padding: 0;
}

.div-header {
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
.div-header .el-form-item {
  margin-left: 10px;
  margin-right: 0;
}
</style>
