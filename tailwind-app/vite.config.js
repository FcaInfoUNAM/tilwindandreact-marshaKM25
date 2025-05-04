import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // Agrega esta línea

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // Agrega Tailwind al array de plugins
  ],
});

