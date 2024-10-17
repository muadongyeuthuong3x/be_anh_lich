const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        fallback: {
            assert: require.resolve('assert/'),
            vm: require.resolve('vm-browserify'),
            stream: require.resolve('stream-browserify'),
            crypto: require.resolve('crypto-browserify'),
            zlib: require.resolve('zlib-browserify'),
            async_hooks: false, // Prevent errors for async_hooks
            querystring: require.resolve('querystring-es3'),
            path: require.resolve('path-browserify'),
            fs: false, // Prevent errors for fs
            os: require.resolve('os-browserify'),
            url: require.resolve('url/') // Added url fallback
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    mode: 'development', // Set mode to development
};
