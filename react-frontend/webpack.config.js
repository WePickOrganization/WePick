
/*
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/templates/index.html',
    filename: 'index.html',
    inject: 'body'
});
*/
 
//In Node.js __dirname refers to the currently executing file.
//Webpack grabs the outermost component class file.
module.exports = {
    entry: ['./src/index.jsx',],
    //Module will explain what webpack will do once the code has been grabbed. 
    module: {
        /*Each "loader" that is added to the loaders array will represent a transformation,
          that the code will go through before reaching the browser*/  
        rules: [
            {   //The test property specifies which files will be affected by the loader.
                //This regexp is for all strings that end with .js
                test: /\.(js|jsx)$/,
                //No .js files in node_modules to be transformed.
                exclude: /node_modules/,
                use:{
                //The transformation to be executed. The babel-loader will transform all the JSX in Javascript.
                loader: 'babel-loader'
                }
            }
        ]
    },
    //Saveing the transformed Javascript into a new file.
    output: {
        filename: 'transformed.js',
        path: __dirname + '/static'
    },
    //plugins: [HTMLWebpackPluginConfig]
};


