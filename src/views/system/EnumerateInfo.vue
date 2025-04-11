<!--
 * @Descripttion: (对该文件的信息描述)
 * @Author: CustomLZH
 * @Date: 2022-12-31 16:11:31
-->
<template>
  <div class="main_content">
    <div class="form_50_div">
      <el-form ref="form" :inline="true" size="small" :model="searchForm">
        <el-form-item>
          <el-input v-model="searchForm.enumerateNameOrType" placeholder="请输入枚举类型/名称">
            <el-button slot="append" type="primary" icon="el-icon-search" @click="search" />
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" icon="el-icon-refresh" @click="refreshCache">
            刷新缓存
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="left_right_div">
      <div class="left_table_div">
        <vxe-grid
          ref="vxeTypeRef"
          height="auto"
          :edit-config="typeEditConfig"
          :border="true"
          size="mini"
          :show-overflow="true"
          :row-config="{ isHover: true, isCurrent: true }"
          :columns="typeColumns"
          :data="typeData"
          @cell-click="cellClick"
        >
          <template #handle_header="scope">
            <div>
              <span>操作</span>
              <el-button
                type="primary"
                :disabled="typeEditFlag"
                icon="el-icon-plus"
                size="mini"
                circle
                @click="handleAdd(scope)"
              />
            </div>
          </template>
          <template #handle_default="scope">
            <el-button
              v-if="!typeEditFlag"
              type="primary"
              size="mini"
              icon="el-icon-edit"
              circle
              @click="handleEdit(scope)"
            />
            <el-button
              v-if="!typeEditFlag"
              type="danger"
              size="mini"
              icon="el-icon-delete"
              circle
              @click="handleDelete(scope)"
            />
            <el-button
              v-if="$refs.vxeTypeRef.isEditByRow(scope.row)"
              type="primary"
              size="mini"
              icon="el-icon-check"
              circle
              @click="handleSave(scope)"
            />
            <el-button
              v-if="$refs.vxeTypeRef.isEditByRow(scope.row)"
              type="info"
              size="mini"
              icon="el-icon-close"
              circle
              @click="handleCancel(scope)"
            />
          </template>
        </vxe-grid>
      </div>
      <div class="right_table_div">
        <vxe-grid
          ref="vxeDataRef"
          height="auto"
          :edit-config="dataEditConfig"
          :border="true"
          size="mini"
          :show-overflow="true"
          :row-config="{ isHover: true, isCurrent: true, drag: true }"
          @row-dragstart="rowDragstartEvent"
          @row-dragend="rowDragendEvent"
          :columns="dataColumns"
          :data="infoData"
          @edit-activated="editActivated"
          @edit-closed="dataEditClosed"
        >
          <template #handle_header="scope">
            <div>
              <span>操作</span>
              <el-button
                type="primary"
                :disabled="dataEditFlag"
                icon="el-icon-plus"
                size="mini"
                circle
                @click="dataHandleAdd(scope)"
              />
            </div>
          </template>
          <template #handle_default="scope">
            <el-button
              v-if="!dataEditFlag"
              type="danger"
              size="mini"
              icon="el-icon-delete"
              circle
              @click="dataHandleDelete(scope)"
            />
          </template>
        </vxe-grid>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        typeData: [],
        infoData: [],
        typeEditConfig: {
          trigger: 'manual',
          enabled: true,
          mode: 'row',
          showIcon: true,
          autoClear: false,
          beforeEditMethod: this.typeBeforeEditMethod,
          afterEditMethod: this.typeAfterEditMethod
        },
        dataEditConfig: {
          trigger: 'click',
          enabled: true,
          mode: 'row',
          showIcon: true,
          autoClear: true,
          beforeEditMethod: this.dataBeforeEditMethod
        },
        typeEditFlag: false,
        dataEditFlag: false,
        dragStarIndex: 0,
        clickRow: {},
        searchForm: {
          enumerateNameOrType: ''
        },
        typeColumns: [
          { title: '序号', type: 'seq', width: 50, align: 'center' },
          {
            field: 'enumerateType',
            title: '枚举类型',
            width: 160,
            align: 'center',
            editRender: { name: 'input', enabled: true, immediate: true }
          },
          {
            field: 'enumerateName',
            title: '枚举名称',
            minWidth: 80,
            align: 'center',
            editRender: { name: 'input', enabled: true, immediate: true }
          },
          {
            field: 'remark',
            title: '备注',
            minWidth: 200,
            align: 'left',
            editRender: { name: 'input', enabled: true, immediate: true }
          },
          { field: 'updateDate', title: '更新时间', width: 80, align: 'center' },
          { field: 'createDate', title: '创建时间', width: 80, align: 'center' },
          {
            field: 'handle',
            title: '操作',
            width: 100,
            align: 'center',
            slots: { header: 'handle_header', default: 'handle_default' }
          }
        ],
        dataColumns: [
          { title: '序号', dragSort: true, type: 'seq', width: 50, align: 'center' },
          {
            field: 'enumerateKey',
            title: '键值',
            minWidth: 100,
            align: 'center',
            editRender: { name: 'input', enabled: true, immediate: true }
          },
          {
            field: 'enumerateLabel',
            title: '描述',
            minWidth: 80,
            align: 'center',
            editRender: { name: 'input', enabled: true, immediate: true }
          },
          {
            field: 'enumerateSort',
            title: '排序',
            width: 70,
            align: 'center',
            editRender: { name: 'input', enabled: true, immediate: true }
          },
          {
            field: 'handle',
            title: '操作',
            width: 120,
            align: 'center',
            slots: { header: 'handle_header', default: 'handle_default' }
          }
        ]
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

      cellClick({ row }) {
        this.clickRow = row
        if (row.id) {
          this.searchData(row.enumerateType)
        }
      },
      search() {
        this.$api['enumerate/enumerateType'].getEnumerateTypePage({}).then(resp => {
          if (resp.data.data) {
            this.typeData = resp.data.data.records
            this.editStateDefault()
            if (this.typeData && this.typeData.length > 0) {
              this.$refs.vxeTypeRef.setCurrentRow(this.typeData[0])
              this.clickRow = this.typeData[0]
              this.searchData(this.clickRow.enumerateType)
            }
          }
        })
      },
      searchData(type) {
        this.$api['enumerate/enumerateType'].getEnumerateDataByType({ type }).then(resp => {
          if (resp.data.data) {
            this.infoData = resp.data.data
            this.dataEditStateDefault()
          }
        })
      },
      // 编辑激活之前
      dataBeforeEditMethod() {
        this.dataEditStateDefault(true)
        return true
      },
      // 编辑激活之前
      typeBeforeEditMethod() {
        this.editStateDefault(true)
        return true
      },
      // 编辑激活之后
      typeAfterEditMethod() {
        // 激活之后逻辑
      },

      // 刷新缓存
      refreshCache() {
        // 刷新缓存逻辑
      },
      handleEdit({ row }) {
        this.$refs.vxeTypeRef.setEditRow(row)
      },
      handleDelete({ row }) {
        this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            let params = {
              type: row.enumerateType
            }
            this.$api['enumerate/enumerateType'].deleteEnumerateType(params).then(resp => {
              if (resp.data.data) {
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                })
                this.search()
              }
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      },
      handleSave({ row }) {
        this.$refs.vxeTypeRef.validate(row).then(valid => {
          if (valid) {
            // 校验失败
            this.$message.warning('请检查必填项！')
          } else {
            this.$api['enumerate/enumerateType'].saveEnumerateType(row).then(resp => {
              if (resp.data.data) {
                this.editStateDefault()
                this.$refs.vxeTypeRef.clearEdit()
                this.search()
              }
            })
          }
        })
      },
      editStateDefault(type = false) {
        this.typeEditFlag = type
      },
      handleAdd() {
        this.$refs.vxeTypeRef.insertAt(this.$XEUtils.clone({}, true), -1)
        this.$refs.vxeTypeRef.setEditRow(this.$refs.vxeTypeRef.getInsertRecords()[0])
      },
      handleCancel() {
        let updateData = this.$refs.vxeTypeRef.getRecordset()
        this.$refs.vxeTypeRef.clearEdit()
        if (updateData.insertRecords && updateData.insertRecords.length > 0) {
          this.$refs.vxeTypeRef.remove(updateData.insertRecords)
        }
        if (updateData.updateRecords && updateData.updateRecords.length > 0) {
          this.$refs.vxeTypeRef.revertData(updateData.updateRecords)
        }
        this.editStateDefault()
      },

      dataHandleDelete({ row }) {
        this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            let params = {
              id: row.id
            }
            this.$api['enumerate/enumerateType'].deleteEnumerateData(params).then(resp => {
              if (resp.data.data) {
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                })
                this.search()
              }
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      },
      editActivated({ row }) {
        this.editRow = this.$XEUtils.clone(row, true)
      },
      dataEditClosed({ row }) {
        this.dataEditStateDefault()
        if (this.$XEUtils.isEqual(row, this.editRow)) {
          return
        }
        this.$refs.vxeDataRef.validate(row).then(valid => {
          if (valid) {
            // 校验失败
            this.$message.warning('请检查必填项！')
          } else {
            this.$api['enumerate/enumerateType'].saveEnumerateData(row).then(resp => {
              if (resp.data.data) {
                this.$message.success('保存成功')
                this.$refs.vxeDataRef.clearEdit()
                this.search()
              }
            })
          }
        })
      },
      dataEditStateDefault(type = false) {
        this.dataEditFlag = type
      },
      rowDragstartEvent({ row }) {
        this.dragStarIndex = this.$refs.vxeDataRef.getRowIndex(row)
      },
      rowDragendEvent({ newRow, oldRow, dragPos }) {
        const editSort = []
        let newRowSort = newRow.enumerateSort
        let dragendIndex = this.$refs.vxeDataRef.getRowIndex(oldRow)
        if (dragPos === 'bottom') {
          // 方向向下
          for (let i = dragendIndex; i > this.dragStarIndex; i--) {
            let row = this.$refs.vxeDataRef.getData(i)
            row.enumerateSort = this.$refs.vxeDataRef.getData(i - 1).enumerateSort
            editSort.push({ id: row.id, enumerateSort: row.enumerateSort })
          }
          oldRow.enumerateSort = newRowSort
          editSort.push({ id: oldRow.id, enumerateSort: oldRow.enumerateSort })
        } else if (dragPos === 'top') {
          // 方向向上
          for (let i = dragendIndex; i < this.dragStarIndex; i++) {
            let row = this.$refs.vxeDataRef.getData(i)
            row.enumerateSort = this.$refs.vxeDataRef.getData(i + 1).enumerateSort
            editSort.push({ id: row.id, enumerateSort: row.enumerateSort })
          }
          oldRow.enumerateSort = newRowSort
          editSort.push({ id: oldRow.id, enumerateSort: oldRow.enumerateSort })
        }
        this.saveEnumerateSort(editSort)
      },
      saveEnumerateSort(data) {
        this.$api['enumerate/enumerateType'].updateEnumerateDataSort(data)
        this.searchData(this.clickRow.enumerateType)
      },
      dataHandleAdd() {
        this.$refs.vxeDataRef.insertAt(
          this.$XEUtils.clone({ enumerateType: this.clickRow.enumerateType }, true),
          -1
        )
        this.$refs.vxeDataRef.setEditRow(this.$refs.vxeDataRef.getInsertRecords()[0])
      }
    }
  }
</script>
<style lang="scss" scoped>
  .form_50_div {
    width: calc(50% - 10px);
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-right: $button-md-padding;
  }

  ::v-deep .form_50_div .el-form-item {
    margin: 0 !important;
  }

  .left_right_div {
    height: calc(100% - 50px);
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .left_table_div,
  .right_table_div {
    width: 50%;
    height: 100%;
  }
</style>
