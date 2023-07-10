import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@styled-system/", replacement: `${__dirname}/styled-system/` },
      { find: "~/", replacement: `${__dirname}/src/` },
    ],
  },
  plugins: [react()],
});
