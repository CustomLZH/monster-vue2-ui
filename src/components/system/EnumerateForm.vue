<!--
 * @Descripttion: (对该文件的信息描述)
 * @Author: CustomLZH
 * @Date: 2023-01-01 16:22:12
-->
<template>
  <el-dialog title="新增枚举" :visible.sync="dialogVisible" width="40%">
    <el-form ref="formRef" :model="formData" size="small" label-width="100px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="枚举类型">
            <el-input v-model="formData.enumerateType" placeholder="请输入枚举类型" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="枚举名称">
            <el-input v-model="formData.enumerateName" placeholder="请输入枚举名称" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注">
            <el-input
              v-model="formData.remark"
              placeholder="请输入备注信息"
              type="textarea"
              :rows="10"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="close">取消</el-button>
      <el-button size="small" type="primary" @click="submit">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        dialogVisible: false,
        formData: {
          enumerateType: ''
        }
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
      open() {
        this.dialogVisible = true
      },
      close() {
        this.dialogVisible = false
      },
      submit() {
        this.$api['enumerate/enumerateType'].insertEnumerateType(this.formData).then(resp => {
          if (resp.data.code === 200) {
            this.$emit('close')
            this.close()
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped></style>
