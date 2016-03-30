module.export = {
    entry : "./js/app.js",
    output : {
        path : __dirname + "/public",
        filename : "bundle.js"
    },
    module : {
        loader : [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
                query: { presets: ['react', 'es2015'] }
            }
        ]
    }
};