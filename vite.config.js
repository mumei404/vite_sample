import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { glob } from 'glob'
const srcDir = './webroot/src/js/'
const input = {}

glob.sync('*/main.js', {
	cwd: srcDir
}).map(key => {
	const inputName = key.substring(0, key.lastIndexOf('.'));
	input[inputName] = resolve(srcDir, key);
})

export default defineConfig({
	plugins: [
		vue(),
		legacy({
			targets: ['ie >= 11'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime']
		})
	],
	build: {
		rollupOptions: {
			/*
			input: {
				Article: resolve(__dirname, 'webroot/src/js/Article/main.js'),
				User: resolve(__dirname, 'webroot/src/js/User/main.js'),
			},
			*/
			input: Object.assign({}, input, {
				top: resolve(__dirname, 'index.html'),
			}),
			output: {
				dir: 'webroot',
				/*
				entryFileNames: `assets/eshima[name].[ext]`,
				chunkFileNames: `assets/cshima[name].js`,
				assetFileNames: `assets/ashima[name].[ext]`
				*/
				entryFileNames: `build/js/[name].js`,
				chunkFileNames: `build/js/[name].js`,
				assetFileNames: `build/assets/[name].[ext]`
			}
		}
	}
})
