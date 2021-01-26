const path = require('path')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    mode: "development",
    entry: {
        index:"./frontend/index.js",
    },
    plugins: [
        new BundleTracker({
            path:__dirname,
            filename: './webpack-stats.json'
        })
    ], 
    output: {
        path: path.resolve(__dirname, "static/bundles"),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude:/(node_modules|bower_components)/,
                loader:"babel-loader",
                options:{ presets:["@babel/env"]}
            },
            {
                test:/\.(scss)/,
                use : [ "style-loader", "css-loader", "sass-loader", ],
            },
        ],

    },
    resolve:{extensions:["*", ".js", ".jsx"]},

}