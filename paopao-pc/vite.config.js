import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from "vite";

export default defineConfig({
server:{
    hmr:true, //开启热更新
    proxy: {
        '/api': {
            target: 'http://101.43.223.7:8080/',
            //changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
},
//plugins: [createVuePlugin()],
plugins: [
    createVuePlugin({
    vueTemplateOptions: {},
    }),
],
resolve: {
    extensions: [".vue", ".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: [
    {
        find: "@",
        replacement: "/src",
    },  
    ],
},
build: {
    // 设置vite打包大小控制
    chunkSizeWarningLimit: 10000,
},
});