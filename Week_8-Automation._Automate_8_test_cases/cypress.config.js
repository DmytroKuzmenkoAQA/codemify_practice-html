const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://delekhomes.com',
    viewportWidth: 1400,
    viewportHeight: 1200,
  },
})