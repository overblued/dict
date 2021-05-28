module.exports = {
  entry:{
    main: './src/index.js'
  },
  output:{
    filename: '[name].js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets:[
          '@babel/preset-react',
          '@babel/preset-env'
          ]
        }
      }
    }]
  },
  watchOptions: {
    ignored: '**/node_modules',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all"
        }
      }
    },
  },
  plugins: []
};
