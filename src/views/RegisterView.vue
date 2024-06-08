<template>
  <div class="register-container">
    <h2>用户注册</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">用户名：</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="confirmPassword">确认密码：</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>
      </div>
      <button type="submit">注册</button>
    </form>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <button @click="goToLogin">返回登录</button>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = '两次密码不一致，请重新输入';
        return;
      }
      
      axios.post('http://localhost:8080/user/register', {
        username: this.username,
        password: this.password,
      }).then(response => {
        if (response.data.code == 1) {
          console.log('注册成功', response.data);
          router.push('/');
        } else {
          console.log('注册失败', response.data);
          this.errorMessage = '注册失败，请重试';
        }
      }).catch(error => {
        this.errorMessage = '注册失败，请重试';
        console.error('注册失败', error);
      });
    },
    goToLogin() {
      router.push('/');
    }
  }
};
</script>

<style>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: #ff0000;
  margin-top: 10px;
}
</style>