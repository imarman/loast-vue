import axios from 'axios'
import { Message } from 'element-ui';
import router from '../router'

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    // baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 5000
});

service.interceptors.response.use(success => {
    console.log("相应拦截器", success);
    if (success.status && success.status == 200 && success.data.code == 500) {
        Message.error({ message: success.data.message })
        return;
    }
    if (success.data.message) {
        Message.success({ message: success.data.message })
    }
    return success.data;
}, error => {
    if (error.response.status == 504 || error.response.status == 404) {
        Message.error({ message: '服务器被吃了( ╯□╰ )' })
    } else if (error.response.status == 403) {
        Message.error({ message: '权限不足，请联系管理员' })
    } else if (error.response.status == 401) {
        mymessage.error({ message: error.response.data.message ? error.response.data.message : '尚未登录，请登录' })
        router.replace('/');
    } else {
        if (error.response.data.msg) {
            Message.error({ message: error.response.data.message })
        } else {
            Message.error({ message: '未知错误!' })
        }
    }
    return;
})

export default service;