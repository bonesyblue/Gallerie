const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: __dirname + '/src',
        // compress: true,
        inline: false,
        port: 9001,
        open: false,
        stats: {
            modules: false,
            chunks: false,
            colors: true,
        }
    },
 });
