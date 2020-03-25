
var path = require('path')

// const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // plugins: [
    //     new VueLoaderPlugin()
    // ],
    module: {       //该节点用于配置所有第三方模块加载器
        rules: [    //这是所有第三方模块的匹配规则
            {test: /\.css$/, use:['style-loader', 'css-loader']}, //配置处理.css文件的第三方loader规则
            {test: /\.less$/, use:['style-loader','css-loader', 'less-loader']},//配置处理.less文件的第三方loader规则
            {test: /\.scss$/, use:['style-loader','css-loader', 'sass-loader']}, //配置处理.scss文件
            {test: /\.(jpg|png)$/, use: 'url-loader'},    // 配置处理url
            // 如果limit给定的值，是图片的大小，单位是byte，如果我们引用的图片大于或者等于给定的limit值，?limit=123&name=[hash:8]-[name].[ext]
            // 则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64的字符串
            {test:/\.js$/, use: 'babel-loader', exclude:/node_modules/},    
            {test:/\.vue$/, use: 'vue-loader'}, //配置处理.vue文件的第三方loader规则
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 

        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    } ,

}