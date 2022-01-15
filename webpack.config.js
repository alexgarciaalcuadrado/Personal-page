const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
 template: path.join(__dirname, "src", "index.html")
});


module.exports = {
    entry: path.join(__dirname, "src", "app.js"),
    output: {
        path:path.resolve(__dirname, "dist"),
    },
    mode: "development",
    module: 
    {
        rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
        },
        {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        }
]},
 plugins: [htmlPlugin]
};