const path = require('path');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/my-project-svg-foler'),  // 业务代码本地私有 svg 存放目录
];
export default {
  "entry": "src/index.js",
  svgSpriteLoaderDirs: svgSpriteDirs,
  extraBabelPlugins: [
    "transform-runtime",
    ["import", { "libraryName": "antd-mobile", "style": "css" }]
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime"
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime"
      ]
    }
  }
}
