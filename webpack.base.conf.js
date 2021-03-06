const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/",
};

// const PAGES_DIR = "src/pug/pages/index.pug";
// const PAGES_DIR = `${PATHS.src}/pug/pages/`;
// const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith(".pug"));

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: {
    app: "./src/index.js",
    // app: PATHS.src,
  },
  output: {
    // filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "/dist",

    filename: `${PATHS.assets}js/[name].js`,
    // path: PATHS.dist,
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./",
          useRelativePath: true,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },

      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: `postcss.config.js`,
              },
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    overlay: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: "[name].css",
      // template: `${PAGES_DIR}/${page}`,
      filename: `${PATHS.assets}css/[name].css`,
    }),

    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/index.pug",
      filename: "./index.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/parts.pug",
      filename: "./parts.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/news.pug",
      filename: "./news.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/statistic.pug",
      filename: "./statistic.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/promo.pug",
      filename: "./promo.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/group.pug",
      filename: "./group.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/group-card.pug",
      filename: "./group-card.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/inter.pug",
      filename: "./inter.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/inter-1.pug",
      filename: "./inter-1.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/meet.pug",
      filename: "./meet.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/meet-1.pug",
      filename: "./meet-1.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/meet-2.pug",
      filename: "./meet-2.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/meet-3.pug",
      filename: "./meet-3.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/meetings.pug",
      filename: "./meetings.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mission.pug",
      filename: "./mission.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/gant.pug",
      filename: "./gant.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/about-news.pug",
      filename: "./about-news.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/about-council.pug",
      filename: "./about-council.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/about-indicators.pug",
      filename: "./about-indicators.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/about-company.pug",
      filename: "./about-company.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/about-requisites.pug",
      filename: "./about-requisites.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/about-contacts.pug",
      filename: "./about-contacts.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/structure.pug",
      filename: "./structure.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/cadr.pug",
      filename: "./cadr.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-main.pug",
      filename: "./mob-main.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-meetings.pug",
      filename: "./mob-meetings.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-tasks.pug",
      filename: "./mob-tasks.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-tasks1.pug",
      filename: "./mob-tasks1.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-mission.pug",
      filename: "./mob-mission.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-modal.pug",
      filename: "./mob-modal.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-1-company.pug",
      filename: "./mob-1-company.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-2-company.pug",
      filename: "./mob-2-company.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-3-company.pug",
      filename: "./mob-3-company.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-1-employees.pug",
      filename: "./mob-1-employees.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-2-employees.pug",
      filename: "./mob-2-employees.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-1-group.pug",
      filename: "./mob-1-group.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-2-group.pug",
      filename: "./mob-2-group.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-chat-group.pug",
      filename: "./mob-chat-group.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-video.pug",
      filename: "./mob-video.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-calendar.pug",
      filename: "./mob-calendar.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-chat-1.pug",
      filename: "./mob-chat-1.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/mob-chat-2.pug",
      filename: "./mob-chat-2.html",
    }),

    //  ...PAGES.map(page => new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/${page}`,
    //   filename: `./${page.replace(/\.pug/,'.html')}`
    // })),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "assets/img" },
        { from: "src/fonts", to: "assets/fonts" },
      ],
    }),
  ],
};
