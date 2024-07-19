const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// 添加 less 解析规则
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
        ],
    },
};
