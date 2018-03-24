import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export default {
    mode: 'development',
    devtool: '#eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/client/index.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        })
    ],
    module: {
        rules: [
            // js
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            // vue
            {
                loader: 'vue-loader',
                test: /\.vue$/,
                options: {
                    hotReload: true
                }
            }
        ]
    }
}