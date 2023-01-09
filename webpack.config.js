const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './docs')
    },
    watchOptions: {
        ignored: /node_modules/
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        contentBase: './docs',
        // open: 'chrome',
        host: "0.0.0.0",
        port: "8080"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                loader: "source-map-loader"
            },

            {
                test: /\.(frag|vert|glsl)$/, use: [{
                    loader: 'glsl-shader-loader',
                    options: {}
                }]
            }
        ]
    }
};
