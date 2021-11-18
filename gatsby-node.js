exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        util: require.resolve("util/"),
        assert: require.resolve("assert/"),
        stream: require.resolve("stream-browserify"),
        zlib: require.resolve("browserify-zlib"),
        path: require.resolve("path-browserify")
      },
      fallback: { fs: false, crypto: false }
    },
    plugins: [
      plugins.provide({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"]
      })
    ]
  });
};
