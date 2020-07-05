const patj = require('path')
const { pathToFileURL } = require('url')
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}