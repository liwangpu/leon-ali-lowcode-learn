// Helper for combining webpack config objects
const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  return merge(config, {
    externals: {
      // "react": "window.React",
      // "react-dom": "window.ReactDOM",
      // "prop-types": "var window.PropTypes",
      "@alifd/next": "var window.Next",
      // "@alilc/lowcode-engine": "window.AliLowCodeEngine",
      // "@alilc/lowcode-editor-core": "window.AliLowCodeEngine.common.editorCabin",
      // "@alilc/lowcode-editor-skeleton": "window.AliLowCodeEngine.common.skeletonCabin",
      // "@alilc/lowcode-designer": "window.AliLowCodeEngine.common.designerCabin",
      // "@alilc/lowcode-engine-ext": "window.AliLowCodeEngineExt",
      // "@ali/lowcode-engine": "var window.AliLowCodeEngine",
      "moment": "var window.moment",
      "lodash": "var window._"
    },
  });
};