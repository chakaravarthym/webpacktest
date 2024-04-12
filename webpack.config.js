const path = require("path");
var JSEntryWebpackPlugin = require("js-entry-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin-next');

module.exports = {
    entry: "./src/index.js",
    output: {
        // options related to how webpack emits results
        filename: '[name]/index.js',
        chunkFilename: 'chunks/[name].[chunkhash].chunk.js',
        // This option determines the name of each output bundle.
        // The bundle is written to the directory specified by the output.path option.
        //library: libraryName,
        // The variable 'library' will be bound with the return value of your entry file,
        // if the resulting output is included as a script tag in an HTML page.
        //libraryTarget: 'umd',
        // Configure how the library will be exposed.
        // libraryTarget: 'umd' - This exposes your library under all the module definitions,
        // allowing it to work with CommonJS, AMD and as global variable.
        //umdNamedDefine: true,
        // When using libraryTarget: "umd", setting output.umdNamedDefine to true will name the AMD module of the UMD build.
        // Otherwise an anonymous define is used.
        path: path.resolve(__dirname, 'dist'),
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        publicPath: '/'
        // the url to the output directory resolved relative to the HTML page
      },
    plugins: [
        new HtmlWebpackPlugin({
            //hash: false,
            filename: './index.html',
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ],
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options:{
                presets: ["@babel/preset-env", "@babel/preset-react"],
                },
                },
            },
        ],
    },
};