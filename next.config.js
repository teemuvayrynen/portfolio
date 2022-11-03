module.exports = {
  images: {
    loader: 'custom'
  },
  env: {
    CAPTCHA_KEY: process.env.CAPTCHA_KEY,
    FROM_EMAIL: process.env.FROM_EMAIL,
    TO_EMAIL: process.env.TO_EMAIL,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CLIENT_ID: process.env.CLIENT_ID
  }
}
