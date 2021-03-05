<template>
  <div id="edit">
    <h1>编辑文章</h1>
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
      <el-form-item label="内容简介" prop="description">
        <el-input type="textarea" v-model="ruleForm.description" placeholder="请填写内容简介"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="content" >
        <el-input
          type="textarea"
          v-model="ruleForm.content"
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
        <el-button @click="submitForm('ruleForm')">完成修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import blog from '@/API/blog'

export default {
  name: 'edit',
  data () {
    return {
      blogId: null,
      ruleForm: {
        title: '',
        content: '',
        description: '',
        atIndex: false
      },
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 10, max: 30, message: '长度在 10 到 30 个字符', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入文章内容', trigger: 'blur' },
          { min: 30, message: '文章简介至少30个字', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容简介', trigger: 'blur' },
          { min: 200, message: '文章内容至少200个字', trigger: 'blur' }
        ]
      }

    }
  },
  created () {
    let blogId = this.$route.params.blogId
    this.blogId = blogId
    blog.getDetail({blogId}).then(res => {
      this.ruleForm.title = res.data.title
      this.ruleForm.content = res.data.content
      this.ruleForm.description = res.data.description
      this.ruleForm.atIndex = res.data.atIndex
    })
  },
  methods: {
    onEdit () {
      blog.updateBlog(
        {blogId: this.blogId},
        {
          title: this.ruleForm.title,
          content: this.ruleForm.content,
          description: this.ruleForm.description,
          atIndex: this.ruleForm.atIndex
        }).then(res => {
        this.$message.success('修改成功！')
        this.$router.push({
          path: `/detail/${res.data.id}`
        })
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.onEdit()
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

<style scoped lang="less">
  @import "../../assets/base.less";

  #edit, #create {
    padding-bottom: 30px;

    h1 {
      text-align: center;
    }

    .msg {
      text-align: right;
      font-size: 12px;
      color: @textLighterColor;
    }
  }
</style>
