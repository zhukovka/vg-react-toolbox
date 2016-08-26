const pkg = require('./package');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: 'inline-source-map',
    entry: {
        main: ['webpack-hot-middleware/client',
            './spec/index.js'
        ],
        mission: ['webpack-hot-middleware/client',
            './spec/mission/index.js']
    },
    // output: {
    //     // Make sure to use [name] or [id] in output.filename
    //     //  when using multiple entry points
    //     filename: "[name].bundle.js",
    //     chunkFilename: "[id].bundle.js"
    // },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].spec.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.scss', '.js', '.json', '.ts'],
        packageMains: ['browser', 'web', 'browserify', 'main', 'style']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: [/(node_modules)/]
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/(node_modules)/, /react-css-themr/]
            }, {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            VERSION: JSON.stringify(pkg.version)
        })
    ]
};
