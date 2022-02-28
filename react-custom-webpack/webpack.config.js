const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (env, argv) => {
  return {
    entry: "./src/index",
    mode: "development",
    devServer: {
      static: path.join(__dirname, "dist"),
      port: argv.port || 3003,
      hot: true,
      open: true,
      historyApiFallback: true, // When the browser refresh with routing it won't get any 404 Error
    },
    output: {
      publicPath: "auto",
    },
    module: {
      rules: [
        //Js or Jsx files supports these rules
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              "@babel/preset-env",
              /**
               *  { runtime: "automatic" } for react17+ version support
               */
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
        //Both inline and external css supports these rules
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        /**
         * Assets(Images) supports these packages
         * Example Formats : JPG,JPEG,PNG,SVG,GIF
         */
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          loader: require.resolve("file-loader"),
          options: {
            limit: 10000,
            name: "static/media/[name].[hash:8].[ext]",
          },
          exclude: /node_modules/,
        },
      ],
    },

    plugins: [
      // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
      new ModuleFederationPlugin({
        name: "pocApp",
        filename: "remoteEntry.js",
        exposes: {
          "./Posts": "./src/Posts",
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: "17.0.2",
          },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: "^6.2.1",
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};
