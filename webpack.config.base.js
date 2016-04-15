'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const distPath = path.join(__dirname, 'dist');
const srcPath = path.join(__dirname, 'app');

const config = {
    context: srcPath,
    output: {
        path: distPath,
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: [ '', '.js', '.styl' ],
        alias: {
            actions: path.join(srcPath, 'actions'),
            components: path.join(srcPath, 'components'),
            constants: path.join(srcPath, 'constants'),
            containers: path.join(srcPath, 'containers'),
            reducers: path.join(srcPath, 'reducers'),
            lib: path.join(srcPath, 'lib')
        },
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },
    resolveLoader: {
        modulesDirectories: [ 'node_modules' ],
        moduleTemplates: [ '*-loader', '*' ],
        extensions: [ '', '.js' ]
    },
    module: {
        noParse: [
            /node_modules[\/\\]immutable[\/\\]dist[\/\\]immutable.js/
        ],
        loaders: [

        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],
    postcss: function() {
        return [
            autoprefixer({
                browsers: [ 'last 2 Chrome versions' ]
            })
        ];
    },
    externals: [
        'musicmetadata',
        'moment',
        'moment-duration-format'
    ]
};

module.exports = config;