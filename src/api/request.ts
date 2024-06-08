import axios from "axios";


// 环境变量
const BASE_URL = process.env.NODE_HOST 


axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 10000; // 超时时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';  // 响应头
axios.defaults.withCredentials = true; // 允许跨域

export function getBaseUrl() {
    return BASE_URL;
}


// 封装get请求
export function get(url: string, params?: object) {
    // 处理异步请求
    return new Promise((resolve, reject) => {
        axios.get(url, { params }).then(
            res => {resolve(res.data)},
            err => {reject(err)},
        )
    })
}

// 封装post请求
export function post(url: string, data?: object) {
    // 处理异步请求
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            res => {resolve(res.data)},
            err => {reject(err)},
        )
    })  
}

// 封装put请求
export function put(url: string, data?: object) {
 return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            res => {resolve(res.data)},
            err => {reject(err)},
        )
 })
}

// 封装delete请求
export function deletes(url: string, data?: object) {
    return new Promise((resolve, reject) => {
        axios.delete(url, { data }).then(
            res => {resolve(res.data)},
            err => {reject(err)},
        )
    })
}