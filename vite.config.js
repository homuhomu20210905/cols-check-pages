import penv from './env/product.js'
import lenv from './env/local.js'
const env = () => {
  if (process.env.NODE_ENV === 'production') {
    return penv
  } else {
    return lenv
  }
}

export default {
  base: env().BASE_URL,
}
