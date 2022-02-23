import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

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
			output: {
				entryFileNames: `assets/eshima[name].js`,
				chunkFileNames: `assets/cshima[name].js`,
				assetFileNames: `assets/ashima[name].[ext]`
			}
		}
	}
})
