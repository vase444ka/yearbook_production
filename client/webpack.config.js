const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {
        bundle: './src/client.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist/statics'),
        filename: '[name].js',
        publicPath: '/',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.scss$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.client.json'
                }
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
        new LiveReloadPlugin(),
    ],
};
