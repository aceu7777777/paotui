const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer:{
        proxy:{
            "api":{
                target:"http://101.43.223.7:8080"
            }
        }
    }
});
