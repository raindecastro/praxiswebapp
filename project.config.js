const config = {
  /* port of the app */
  port: 3000,
  /** The full path to the project's root directory */
  basePath: __dirname,
  /** The name of the directory containing the application source code */
  srcDir: 'src',
  /** The file name of the application's entry point */
  main: 'index.js',
  /** The name of the directory in which to emit compiled assets */
  outDir: 'dist',
  /** The base path for all projects assets (relative to the website root) */
  publicPath: './',
  /** A hash map of keys that the compiler should treat as external to the project */
  externals: {},
};

module.exports = config;
