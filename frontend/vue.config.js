var path = require("path");

module.exportx = {
  outputDir : path.resolve("../backend/public"),
  /*
  devServer:{
    proxy:{
      '/api':{
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite:{
          "^api" : ''
        }
      }
    }
  }
  */
};
