const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
    },
    externals: {
        react: 'react',
        reactDOM: 'react-dom',
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Creates `style` nodes from JS strings
                    // 'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {test: /\.svg$/, loader: 'svg-inline-loader'},
            {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
        ],
    },
};
