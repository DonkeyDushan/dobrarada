/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/",
  },
  buildOptions: {
    baseUrl: "/build",
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2017",
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  plugins: [
    '@snowpack/plugin-postcss',
  ],
};
