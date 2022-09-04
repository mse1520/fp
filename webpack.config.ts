import { resolve } from 'path';
import { Configuration as WebpackConfiguration, EnvironmentPlugin } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const IS_DEV = process.env.NODE_ENV === 'dev';

interface GameWebpackConfig extends WebpackConfiguration {
  devServer: DevServerConfiguration
}

const plugins = [];
if (IS_DEV) plugins.push(
  // html 파일을 번들링 파일과 연결하여 ouput 해준다
  new HtmlWebpackPlugin({
    cache: false, // 변경된 경우에만 파일을 내보냅니다
    template: resolve('test', 'index.html') // 번들링 파일과 연결할 파일의 경로
  })
);
plugins.push(new ForkTsCheckerWebpackPlugin());

const config: GameWebpackConfig = {
  name: 'webpack',
  target: ['web', 'es5'],
  // mode, // 실서비스는 production
  // devtool, // 실서비스는 hidden-source-map
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'eval-cheap-module-source-map' : 'hidden-source-map',
  resolve: {
    // import 구문에서 합쳐질 파일의 확장자를 붙여준다
    extensions: ['.ts', '.js'],
    // 경로 alias
    alias: {
      '@basic': resolve('src', 'basic'),
      '@concurrency': resolve('src', 'concurrency'),
      '@lazy': resolve('src', 'lazy'),
      '@internal': resolve('src', 'internal')
    },
  },
  // 합쳐질 파일의 시작점
  // 파일이 서로 연결된경우 알아서 찾아준다
  entry: {
    underbarjs: IS_DEV ? resolve('test', 'index.ts') : resolve('src', 'index.ts')
  },
  // 하나로 합쳐실 출력 파일의 설정입니다
  output: {
    path: resolve('dist'),
    filename: '[name].min.js',
    clean: true,
    // 라이브러리 cdn 옵션
    library: { type: 'umd' },
    globalObject: 'this'
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
  plugins,
  // devServer 관련 설정
  devServer: {
    // 코드 변화 감지 변경 옵션
    hot: true,
    port: 4005,
    // 브라우저 열기
    open: true
  }
};

export default config;