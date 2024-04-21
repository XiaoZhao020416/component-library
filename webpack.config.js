module.exports = {
    // loader的配置
    module:{
        rules: [
            {
              test: /\.(png|jpe?g|gif|svg)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: 'images/[name].[ext]',
                  },
                },
              ],
            },
        ]
    },
    // 使用开发模式打包
    mode:"development"
}
