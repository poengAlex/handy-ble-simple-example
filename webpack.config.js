const path = require('path');
module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'main.js',
        publicPath:'/dist/',
        libraryTarget:'umd', 
        library:'handy',
        umdNamedDefine: true,
        libraryExport: 'default' 
    }
}