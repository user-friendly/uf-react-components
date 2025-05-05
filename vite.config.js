/**
 * Vite config file.
 */

// Framework plugins.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __package_name = process.env.npm_package_name
const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  // See https://vite.dev/config/shared-options.html#define
  // The `define` sections defines values to be replaced on build time.
  // Similar to #define C/C++ preprocessor macro (text macro).
  define: {
	__PACKAGE_NAME__: JSON.stringify(process.env.npm_package_name),
    __PACKAGE_VERSION__: JSON.stringify(process.env.npm_package_version),
	__PACKAGE_INFO_ALWAYS__: JSON.stringify(true),
  },
  plugins: [react()],
  clearScreen: false,
  build: {
	lib: {
		entry: resolve(__dirname, 'src/index.jsx'),
		name: __package_name,
		fileName: __package_name
	},
	rollupOptions: {
	  external: ['react', 'react-dom', 'react-markdown', 'lodash', 'tailwind-merge'],
	  output: {
		globals: {
			react: 'React',
			'react-markdown': 'Markdown',
			lodash: '_',
			'tailwind-merge': 'tailwindMerge'
		}
	  }
	}
  }
})
