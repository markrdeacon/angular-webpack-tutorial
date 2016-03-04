var path = require('path');
var webpack = require('webpack');

var config = {
    context: path.resolve(__dirname + '/app'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname + '/app'),
        //publicPath: './',     //seemed to need this set to /assets/ and then not at all.
        filename: 'bundle.js',
        pathinfo: true
    },
    plugins: [
        new webpack.DefinePlugin({
            //ON_TEST will be true when NODE_ENV === 'test'. We will set NODE_ENV when running tests...
            //set NODE_ENV=test&&karma start
            ON_TEST: process.env.NODE_ENV === 'test'    
        })
    ],
    
    module: {
        loaders: [
            {test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/}, 
            {test: /\.html$/, loader: 'raw'},
            {test: /\.css$/, loader: 'style!css'},  //loaders are used from right to left. So css then style.
            {test: /\.styl$/, loader: 'style!css!stylus'},  
        ]
    },
    devtool: 'eval',    //not sure which to use.  Eval is supposed to be fastest.  Not sure what benefits the others offer.
    //devtool: 'inline-source-map',    
};

if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
    config.output.pathinfo = false;
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = 'source-map';
}

module.exports = config;