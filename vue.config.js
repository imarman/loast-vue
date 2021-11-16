module.exports = {

    devServer: {
        // host: '0.0.0.0',
        // 指定 vue 启动端口
        port: 8899,

        // devServer.proxy 可以是一个指向开发环境 API 服务器的字符串：
        proxy: 'http://localhost:4000'
    }
}