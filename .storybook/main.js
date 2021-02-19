const path = require('path')

module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs"
  ],
  webpackFinal: async config => {
    // ...
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
  }
}