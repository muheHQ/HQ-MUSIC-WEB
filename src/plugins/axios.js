"use strict";
import { createApp } from 'vue'; // 引入 createApp
import axios from "axios";

let config = {
  // 配置项
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // 请求拦截器逻辑
    return config;
  },
  function(error) {
    // 请求错误处理逻辑
    return Promise.reject(error);
  }
);

// 响应拦截器
_axios.interceptors.response.use(
  function(response) {
    // 响应拦截器逻辑
    return response;
  },
  function(error) {
    // 响应错误处理逻辑
    return Promise.reject(error);
  }
);

const plugin = {
  install: function(app) { // 使用 app 对象进行安装
    app.config.globalProperties.axios = _axios; // 注入 axios 实例
    app.provide('axios', _axios); // 通过 provide/inject 提供 axios 实例
  }
};

export default plugin;