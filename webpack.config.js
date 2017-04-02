var path = require('path');

module.exports = {
    entry: ['./build/frontend/main.js'],

    output: {
        path: path.resolve(__dirname, 'web/js'),
        filename: 'main.js'
    }

};