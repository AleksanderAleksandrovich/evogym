import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
export default defineConfig({
  base: '/evogym',
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
