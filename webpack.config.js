/**
 * Created by jet on 12/27/16.
 */

var fs   = require('fs');
var path = require('path');


const APPLICATION_PATH = {
    ROOT:    path.resolve(__dirname,"app"),
    OUTPUT:  path.resolve(__dirname,"build"),
    TEST:    path.resolve(path.resolve(__dirname,"app"),"test")
};


var files = []
var entries =  fs.readdirSync(APPLICATION_PATH.ROOT).filter(function (file) {
     if(file.match(/.*\.js$/))
     {
         var fileName =  path.basename(file,".js");
         var fileParameter= fileName.concat(":").concat(path.resolve(APPLICATION_PATH.ROOT,file));
         files.push(fileParameter);
     }
});


module.exports = {

    entry: './app/App.js',
    // entry: files,

    output: {
        path: path.resolve(__dirname, APPLICATION_PATH.OUTPUT),
        filename: "bundle.js"
    },

    devServer: {
        inline: true,
        hot:true,
        port:9090
    },

    module:{
        loaders:[
            { test:/\.jsx?$/,include:APPLICATION_PATH.ROOT, query: { presets: ['es2015', 'react'] },loader:'babel'},
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }

};

// export default webpackConfig;
