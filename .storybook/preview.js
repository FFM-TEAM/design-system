const path = require('path')

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
webpackFinal: async config => {
  // ...
  config.module.rules.unshift({
    test: /\.svg$/,
    use: ["@svgr/webpack", "url-loader"],
  });
  return config;
}