module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/"
    // devServer: {
    //     // port: 8000,
    //     proxy: {
    //         // '/': {
    //         //     // target: 'http://localhost:8080',//测试使用
    //         //     // target: 'http://127.0.0.1/',//正式
    //         //     changeOrigin: true, // 是否允许跨越, 开发环境中使用
    //         //     // pathRewrite: {
    //         //     // '^/api': '/mock',//测试使用
    //         //     // '^/api': ''
    //         //     // }
    //         // }
    //     }
    // }
}

// var utils = require('utils');
// module.exports = {
//     rules: [
//         {
//             test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//             loader: 'url-loader',
//             options: {
//                 limit: 10000,
//                 name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
//             }
//         }
//     ]
//     // publicPath: process.env.NODE_ENV === "production" ? "/simplecarbon" : "/"
// }