const path = require("path");

module.exports = {
  sassOptions: {
    // Access global scss variables into CSS/Scss Modules
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "assets/styles/partials/variables.scss";`,
  },
  images: {
    domains: ["cdn.pixabay.com"],
  },
  webpack: (config, { webpack }) => {
    // process.exit();
    // Important: return the modified config
    return config;
  },
};
// module.exports = {
//   images: {
//     domains: [],
//   },
//   webpack: (config, { webpack }) => {
//     config.resolve.alias["handlebars"] = "handlebars/dist/handlebars.js";
//     config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
//     // process.exit();
//     // Important: return the modified config
//     return config;
//   },
// };
