import { merge } from 'webpack-merge'
import common from './webpack.common.js'

const publicFolder = new URL(
  'public',
  import.meta.url
)

export default merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: publicFolder.pathname,
    },
    compress: true,
    port: 3000,
  },
})
