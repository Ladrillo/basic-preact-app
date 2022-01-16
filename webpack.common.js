import HtmlWebpackPlugin from 'html-webpack-plugin'

const distFolder = new URL(
  'dist',
  import.meta.url
)

export default {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    publicPath: '/',
    path: distFolder.pathname,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': [
              ['@babel/preset-env', { targets: { chrome: '80' } }],
              ['@babel/preset-react'],
            ],
            'plugins': [
              ['babel-plugin-styled-components'],
            ]
          }
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
}
