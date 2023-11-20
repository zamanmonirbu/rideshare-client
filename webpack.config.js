module.exports = {
    resolve: {
      fallback: {
        "process": require.resolve("process/browser"),
        "stream": require.resolve("stream-browserify"),
        // "crypto": require.resolve("crypto-browserify"),
        // "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify/browser"),
      },
    },
  };
  