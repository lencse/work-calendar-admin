var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: ['./build/frontend/main.js'],

    output: {
        path: path.resolve(__dirname, 'web/js'),
        filename: 'main.js'
    },

    plugins: [
        new LiveReloadPlugin()
    ]

};