import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";
import webpack from 'webpack';

export function buildPlugins({ paths, isDev }: BuildOptions) {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin()
  ];

  return plugins as WebpackPluginInstance[];
}