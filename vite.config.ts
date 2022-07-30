import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import viteCompression from 'vite-plugin-compression'
import * as path from "path"
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	//打包路径
	base: './',
	plugins: [
		vue(),
		vueJsx(),
		createSvgIconsPlugin({
			iconDirs: [resolve(process.cwd(), 'src/assets/svg')],// 指定需要缓存的图标文件夹
			symbolId: 'icon-[dir]-[name]'// 指定symbolId格式
		}),
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: 'gzip',
			ext: '.gz'
		}),
		AutoImport({
			imports: ["vue", "vue-router"]
		})
	],
	//配置路径别名
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	//生产环境打包配置,去除 console debugge
	build: {
		minify: "terser",
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		}
	},

	//配置代理
	server: {
		host: '0.0.0.0',
		port: 8300,
		open: false,
		https: false,
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
