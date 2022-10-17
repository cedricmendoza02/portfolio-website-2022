const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    // bypass asset size error
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    // required by reactJS.
    devServer: { 
        static: {
            directory: path.resolve(__dirname, 'src')
        },
        port: 3000,
        open: true,
        hot: true,
        // Enables gzip compression
        compress: true, 
        historyApiFallback: true
    },
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        // Delete the existing output folder
        // Before creating a new one
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            {
                                'plugins': ['@babel/plugin-syntax-dynamic-import'] // dynamic import seems to have allowed map function on react
                            }
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['index']
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/output.css', to: '[name][ext]'}
            ]
        })
    ]
}