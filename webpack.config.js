const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
  mode: 'development',
	devtool: 'eval', //테스트 배포용 : 'hidden-source-map',
	resolve: {
		extensions: ['.js', '.vue'], //확장자를 제거하고 불러낼수 있다.
		// alias: {
    //   'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js'  webpack 1용 입니다
    // }
	},
	//하나로 합쳐질 파일의 이름 app (나중에 app.js로 하나로 합쳐진다 )
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    clean: true,
  },
	module: {
		//자바스크립트 파일들을 어떻게 처리할건지 정해둔다
		rules: [{
						test: /\.vue$/, //파일명이 .vue로 끝나는 파일
						loader: 'vue-loader', //vue-loader을 사용하겠다. use: 'vue-loader'도 가능
				},
				// 파일명이 .css로 끝나는 파일들은 해당 loader을 사용
				{
						test: /\.css$/,
						use: ['vue-style-loader', 'css-loader'],
				},
		],
},
  devServer: {
    port: 9000,
  },
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Table of Contents',
			template: path.join('src', 'index.html'),
		}),
		new VueLoaderPlugin(),
	],
	
}