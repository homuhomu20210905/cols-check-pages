import penv from './env/product.js'
import lenv from './env/local.js'
const env = () => {
  if (process.env.NODE_ENV === 'production') {
    return penv
  } else {
    return lenv
  }
}
console.log('vite:' + env().BASE_URL)
export default {
  base: env().BASE_URL,
  assetsDir: env().BASE_URL,
  outDir: 'dist',
}
