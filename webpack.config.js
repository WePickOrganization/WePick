//In Node.js __dirname refers to the currently executing file.
//Webpack grabs the outermost component class file.
module.exports = {
    entry: __dirname + '/app/index.js',
    //Module will explain what webpack will do once the code has been grabbed. 
    module: {
        /*Each "loader" that is added to the loaders array will represent a transformation,
          that the code will go through before reaching the browser*/
        loaders: [
            {   //The test property specifies which files will be affected by the loader.
                //This regexp is for all strings that end with .js
                test: /\.js$/,
                //No .js files in node_modules to be transformed.
                exclude: /node_modules/,
                //The transformation to be executed. The babel-loader will transform all the JSX in Javascript.
                loader: 'babel-loader'
            }
        ]
    },
    output: {}
};