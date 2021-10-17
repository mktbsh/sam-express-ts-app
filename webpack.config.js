const AwsSamPlugin = require('aws-sam-webpack-plugin');
const awsSamPlugin = new AwsSamPlugin();

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    entry: awsSamPlugin.entry(),
    output: {
        filename: "[name]/app.js",
        libraryTarget: 'commonjs2',
        path: __dirname + '/.aws-sam/build'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    target: 'node',
    externals: [],
    mode: process.env.NODE_ENV || 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        awsSamPlugin
    ]
}

module.exports = config;