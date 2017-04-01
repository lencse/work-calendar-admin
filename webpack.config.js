var path = require('path');

module.exports = {
    entry: ['./frontend/'],

    output: {
        path: path.resolve(__dirname, 'web/dist'),
        filename: 'main.js'
    }

};