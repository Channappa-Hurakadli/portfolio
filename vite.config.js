import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: "/portfolio",
  // Ensure Vite does not look for TypeScript configuration
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
