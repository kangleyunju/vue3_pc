const { defineConfig } = require('@vue/cli-service')
const path = require('path')
import { svgBuilder } from './src/components/svgIcon/svgBuilder';
function resolve(dir) {
	return path.join(__dirname, '..', dir)
}
module.exports = defineConfig({
	publicPath: '/', // 基本路径
	outputDir: 'dist', // 构建时的输出目录
	assetsDir: 'static', // 放置静态资源的目录
	indexPath: 'index.html', // html 的输出路径
	filenameHashing: true, // 文件名哈希值
	lintOnSave: false, // 是否在保存的时候使用 `eslint-loader` 进行检查。
	runtimeCompiler: false, //在运行的时候才去编译template
	transpileDependencies: [], // babel-loader 默认会跳过 node_modules 依赖。
	productionSourceMap: false, // 是否为生产环境构建生成 source map
	configureWebpack: () => {}, //调整内部的 webpack 配置
	chainWebpack: config => {}, //调整内部的 webpack 配置
	plugins: [
		svgBuilder("./src/assets/svg"),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		})
	],
	transpileDependencies: true,
	devServer: {
		// host:'localhost',
		// open:true,
		port: 8300,
		proxy: {
			'/dev': {
				target: 'https://blog.csdn.net',
				changeOrigin: true,
				pathRewrite: {
					"^/dev": ""
				}
			}
		}
	}
})
