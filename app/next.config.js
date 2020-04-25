const withSass = require("@zeit/next-sass");
const path = require("path");

module.exports = withSass({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      store: path.resolve(__dirname, "store"),
      hoc: path.resolve(__dirname, "hoc"),
      components: path.resolve(__dirname, "components"),
      static: path.resolve(__dirname, "static"),
      helpers: path.resolve(__dirname, "helpers"),
      config: path.resolve(__dirname, "config"),
    };
    return config;
  },
});
