const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  name: 'webpack-config-fp',
  // 실서비스: production, 개발: development
  mode: 'production',
  // eval-cheap-module-source-map
  devtool: 'source-map',
  // entry 부분에서 합쳐질 파일의 확장자를 붙여준다
  resolve: {
    extensions: ['.js']
  },
  // 합쳐질 파일의 시작점
  // 파일이 서로 연결된경우 알아서 찾아준다
  entry: {
    fp: path.resolve('src')
  },
  // 하나로 합쳐실 출력 파일의 설정입니다
  output: {
    path: path.resolve('dist'),
    filename: '[name].min.js',
    library: { type: 'umd' },
    globalObject: 'this'
  },
  plugins: [new CleanWebpackPlugin()]
};