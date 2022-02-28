const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: "./src/index",
    mode: "development",
    devServer: {
      static: path.join(__dirname, "dist"),
      port: argv.port || 3003,
      hot: true,
      open: true,
    },
    output: {
      publicPath: "/",
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
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};
