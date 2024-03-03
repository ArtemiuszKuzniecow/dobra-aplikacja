import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackPluginInstance } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/config";
import webpack from "webpack";

export function buildPlugins({ paths, isDev }: BuildOptions) {
  const plugins: WebpackPluginInstance[] = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    })
  ];

  if (isDev) {
    plugins.concat([
      new webpack.HotModuleReplacementPlugin(), 
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    ])
  }

  return plugins;
}
