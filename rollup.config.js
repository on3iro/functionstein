/* eslint-disable flowtype/require-valid-file-annotation */

import babel from 'rollup-plugin-babel'
// import uglify from 'rollup-plugin-uglify'
// import { minify } from 'uglify-es'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es'
    },
    {
      file: 'dist/index.js',
      format: 'umd'
    }
  ],
  name: 'functionstein',
  plugins: [
    babel({ exclude: 'node_modules/**' })
    // uglify({}, minify)
  ].concat(
  ),
  sourceMap: false,
  external: [],
  globals: {}
}
