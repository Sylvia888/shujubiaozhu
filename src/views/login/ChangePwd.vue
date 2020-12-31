<template>
  <div class="login-container">
    <!-- 修改密码页面 -->
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginFormRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.oldPwd"
          :type="passwordType"
          placeholder="请输入原始密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
          onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
        />
        <!-- 点击显示密码图标 -->
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <!-- 新密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="newPassword"
          v-model="loginForm.newPwd"
          :type="passwordType"
          placeholder="请输入新密码"
          name="newPassword"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
          onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
        />
        <!-- 点击显示密码图标 -->
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <el-form-item prop="loginPwd" style="display: none">
        <el-input ref="loginPwd" v-model="loginForm.loginPwd" />
      </el-form-item>
      <!-- 提交 -->
      <el-button
        :disabled="can"
        :loading="loading"
        type="warning"
        style="width: 50%; margin-bottom: 30px; float: left"
        @click.native.prevent="handleSubmitChange"
        >提交</el-button
      >
      <el-button
        :disabled="can"
        :loading="loading"
        type="primary"
        style="width: 50%; margin-bottom: 30px; float: left"
        @click.native.prevent="handleBack"
        >返回</el-button
      >
    </el-form>
  </div>
</template>
<script>
import md5 from 'js-md5'
import { changePwd } from '../../api/user'
import { MessageBox } from 'element-ui'
export default {
  name: 'Login',
  data () {
    const validateuserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }

    return {
      can: false,
      // 登陆表单的数据绑定对象
      loginForm: {
        oldPwd: '',
        newPwd: '',
      },
      // 表单验证规则对象
      loginFormRules: {
        oldPwd: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
        newPwd: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
      },

      loading: false,
      passwordType: 'password',
      redirect: undefined,
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true,
    },
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 修改密码
    handleSubmitChange () {
      let that = this
      this.$refs.loginForm.validate((valid) => {
        that.loginForm.oldPwd = md5(this.loginForm.oldPwd)
        changePwd(that.loginForm).then((response) => {
          if (response.data.code == 1000) {
            this.$message.success(response.data.message)
          } else {
            this.$message.error(response.data.message)
          }
        })
      })
    },
    handleBack () {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .el-button {
    margin-left: 0;
  }
}
</style>
