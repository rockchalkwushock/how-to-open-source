import { join } from 'path';

export default {
  entry: join(__dirname, 'src'),
  output: {
    path: join(__dirname, 'dist'),
    library: 'how-to-open-source',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
