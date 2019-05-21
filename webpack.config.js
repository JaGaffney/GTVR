//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const path = require('path');

module.exports = {
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    entry: {
        index: './gtvr/frontend/src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'gtvr/frontend/static/frontend/')
    },
    optimization: { 
        // minimizer: [
        //     // we specify a custom UglifyJsPlugin here to get source maps in production
        //     new UglifyJsPlugin({
        //       cache: true,
        //       parallel: true,
        //       uglifyOptions: {
        //         compress: false,
        //         ecma: 6,
        //         mangle: true
        //       },
        //       sourceMap: true
        //     })
        // ],
        splitChunks: {
            chunks: 'all',
        },
    }     
}