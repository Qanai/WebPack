var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "App"),
    entry: "./main.js",
    output: {
        path: path.join(__dirname, "Dist"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: "babel",
                exclude: /node-modules/
            },
            //{
            //    test: /\.css/,
            //    loaders: ["style", "css"],
            //    exclude: /node-modules/
            //}
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("css")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};