const { name } = require('./package.json')
const path = require('path')

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, './dist/app.js'),
      instances: require('os').cpus().length,
      autorestart: true,
      restart_delay: 1000,
      watch: ['dist'],
      ignore_watch: ['node_modules', 'logs', 'static'],
      watch_options: {
        followSymlinks: false,
      },
      watch_delay: 1000,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
}
