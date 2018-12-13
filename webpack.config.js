const path = require('path')
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    mode: "development",
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name].[hash].[ext]'
                    }
                }]
            },
            {
                test:/\.css$/,
                use:['style-loader',
                {
                    loader:'css-loader',
                    options:{
                        modules:true
                    }
                }

                ]
            }

        ]
    }
}