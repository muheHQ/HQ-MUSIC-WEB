<template>
  <div class="login-page">
    <div class="login-form">
      <h1><strong>Login</strong></h1>
      <form>
        <input v-model="username" type="text" placeholder="用户名" />
        <input v-model="password" type="password" placeholder="密码"/>
        <div class="button-container">
          <button type="button" @click="login">登录</button>
          <button type="button" @click="register">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import router from '@/router';
import { HttpManager } from '../api/index.ts';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''  
    };
  },
  methods: {
    login() {
      // axios.post('http://localhost:8080/user/login/status', {
      HttpManager.signIn({
        username: this.username,
        password: this.password
      }).then(response => {
        if (response.data.code == 200) {
          localStorage.setItem('token', JSON.stringify(response.data));
          console.log('登录成功', response.data);
          this.$router.push('/manage');
        } else {
          console.log('登录失败', response.data);
          this.errorMessage = '登录失败，请检查用户名和密码';
        }
      }).catch(error => {
        this.errorMessage = '登录失败，请检查用户名和密码';
        console.error('登录失败', error);
      });
    },
    register() {
      this.$router.push("/register");
    }
  }
}
</script>

<style scoped>
.login-page {
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-form {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-container {
  display: flex;
  gap: 5px;
}

button {
  flex: 1;
  padding: 10px;
  background-color: #ff9a9e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff7f81;
}
</style>