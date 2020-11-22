<template>
  <div class="login-container">
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="80px"
      class="longin-form"
    >
      <h2 class="login-title">李-会员管理系统</h2>
      <el-form-item label="名称" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/* import loginApi from '@/api/login' */
import { login, getUserInfo } from "@/api/login";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入名称",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid);

        if (valid) {
          //alert("submit!");
          //提交后台
          login(this.form.username, this.form.password).then((response) => {
            const resp = response.data;
            console.log(resp, resp.flag, resp.data.token);

            if (resp.flag) {
              console.log("getUserInfo", resp.data.token);
              getUserInfo(resp.data.token).then((response) => {
                const respUser = response.data;
                if (respUser.flag) {
                  console.log("userinfo", respUser.data);
                  //1.保存 token, 用户信息
                  localStorage.setItem(
                    "lz-msm-user",
                    JSON.stringify(respUser.data)
                  );
                  localStorage.setItem("lz-msm-token", resp.data.token);
                  //验证成功 前往首页
                  this.$router.push("/");
                } else {
                  this.$message({
                    message: respUser.message,
                    type: "warning",
                  });
                }
              });
            } else {
              //登录失败
              this.$message({
                message: resp.message,
                type: "warning",
              });
            }
          });
        } else {
          alert("error submit!!");
          console.log("error submit!!");
        }
      });
    },
  },
};
</script>

<style scoped>
.longin-form {
  width: 360px;
  margin: 180px auto;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 25px;
  border-radius: 20px;
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img_loginBg.jpg");
}
.login-title {
  color: #303133;
  text-align: center;
}
</style>