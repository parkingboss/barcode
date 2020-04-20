import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import webWorkerLoader from 'rollup-plugin-web-worker-loader';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      file: pkg.main, 'format': 'umd', name: 'barcode'
    },
    plugins: [
      resolve(),
      commonjs(),
      webWorkerLoader({
        sourcemap: true,
        inline: true,
      }),
    ],
  }
];