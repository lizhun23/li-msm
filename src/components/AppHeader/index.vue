<template>
  <div class="header">
    <a href="#/">
      <img class="logo" src="@/assets/li.png" width="25px;" alt="" />
      <span class="company">李-会员管理系统</span>
    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="a"
          >修改密码</el-dropdown-item
        >
        <el-dropdown-item icon="el-icon-circle-close" command="b"
          >退出</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    handleCommand(command) {
      switch (command) {
        case "a":
          this.$message(`点击了${command}`);
          break;
        case "b":
          this.$message(`点击了${command}`);
          break;
      }
    },
  },
};
</script>

<style scoped>
.logo {
  vertical-align: middle;
  padding: 0px 10px 0px 40px;
}
.company {
  position: absolute;
  color: white;
}
.el-dropdown {
  float: right;
  margin-right: 40px;
}

.el-dropdown-link {
  color: white;
  cursor: pointer;
}
/* .el-dropdown-link:hover {
  color: rgb(204, 201, 0);
} */
</style>
