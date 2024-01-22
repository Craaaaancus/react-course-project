import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types';
import { buildWebpackConfig } from './config/build';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  build: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
}

export default (env: BuildEnv) => {
  const MODE = env.mode || 'development';
  const isDev = MODE === 'development';
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    port: PORT,
    paths,
    isDev,
  });

  return config;
}
