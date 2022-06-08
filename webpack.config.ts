import { resolve } from 'path';
import { Configuration as WebpackConfiguration, EnvironmentPlugin } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

interface GameWebpackConfig extends WebpackConfiguration {
  devServer: DevServerConfiguration
}

const config: GameWebpackConfig = {
  name: 'webpack',
  // mode, // 실서비스는 production
  // devtool, // 실서비스는 hidden-source-map
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    // import 구문에서 합쳐질 파일의 확장자를 붙여준다
    extensions: ['.ts', '.js'],
    // 경로 alias
    alias: {
      '@basic': resolve('src_v2', 'basic'),
      '@concurrency': resolve('src_v2', 'concurrency'),
      '@lazy': resolve('src_v2', 'lazy'),
      '@internal': resolve('src_v2', 'internal')
    },
  },
  // 합쳐질 파일의 시작점
  // 파일이 서로 연결된경우 알아서 찾아준다
  entry: {
    renderer: resolve('test', 'index.ts')
  },
  // 하나로 합쳐실 출력 파일의 설정입니다
  output: {
    path: resolve('test', 'dist'),
    filename: '[name].js',
    clean: true
  },
  // loader 설정
  module: {
    rules: [{
      // test는 어떤 파일이 함쳐지는지에 대한 내용입니다
      test: /\.ts$/, //정규 표현식
      exclude: /node_modules/,
      // 다수의 loader를 사용할 시 use 배열로 객체를 정의할 수 있다
      // style loader를 참고 자료로 검색해볼 것
      // use: [{}, {}],
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
      }
    }]
  },
  // plugin은 번들링 된 파일에 작업이 필요할 때
  plugins: [
    // 번들링 할 때 쓰이는 변수를 화면단으로 넘겨주는 역할
    // new EnvironmentPlugin({ FRONT_ENV }),
    // html 파일을 번들링 파일과 연결하여 ouput 해준다
    new HtmlWebpackPlugin({
      cache: false, // 변경된 경우에만 파일을 내보냅니다
      template: resolve('test', 'index.html') // 번들링 파일과 연결할 파일의 경로
    }),
    // typescript 검사
    new ForkTsCheckerWebpackPlugin()
  ],
  // devServer 관련 설정
  devServer: {
    // 코드 변화 감지 변경 옵션
    hot: true,
    port: 4005,
  }
};

export default config;