<template>
  <div id="edit">
    <h1>创建文章</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="title" placeholder="请填写标题">
        <el-input v-model="ruleForm.title" placeholder="请填写标题"></el-input>
      </el-form-item>
      <el-form-item label="内容简介" prop="content">
        <el-input type="textarea" v-model="ruleForm.content" placeholder="请填写内容简介"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="description" >
        <el-input
          type="textarea"
          v-model="ruleForm.description"
          placeholder="请填写文章内容"
          rows=20
        ></el-input>
      </el-form-item>
      <el-form-item label="是否展示到首页" prop="atIndex">
        <el-switch
          v-model="ruleForm.atIndex"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import blog from '@/API/blog'
export default {
  name: 'index',
  data () {
    return {
      ruleForm: {
        title: '',
        content: '',
        description: '',
        atIndex: false
      },
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容简介', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        description: [{ required: true, message: '请输入文章内容', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onCreate () {
      blog.createBlog({
        title: this.ruleForm.title,
        content: this.ruleForm.content,
        description: this.ruleForm.description,
        atIndex: this.ruleForm.atIndex
      }).then(res => {
        this.$message.success(res.msg)
        this.$router.push({
          path: `/detail/${res.data.id}`
        })
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.onCreate()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
