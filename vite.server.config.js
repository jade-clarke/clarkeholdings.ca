import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        ssr: 'src/functions/submitForm.js',
        outDir: 'functions', 
        rollupOptions: { 
            // Adjust 'external' as needed depending on your libraries    
            external: ['@sendgrid/mail'],
        },
        copyPublicDir: false
    },
});