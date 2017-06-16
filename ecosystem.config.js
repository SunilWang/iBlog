/* Copyright© 2015-2017 zhuanzhuan All Rights Reserved. */
/**
 * author       : 王澍
 * createTime   : 2016/12/30 11:50
 * description  :
 */

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
        // First application
    {
      name: 'iBlog',
      script: './server/index.js',
      exec_mode: 'cluster',
      instances: 0,
      kill_timeout: 1000,
      merge_logs: true,
      max_memory_restart: '300M',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      log_file: './server/logs/pm2Logs/iBlog.log',
      error_file: './server/logs/pm2Logs/iBlog.log',
      out_file: './server/logs/pm2Logs/iBlog.log',
      pid_file: './server/logs/pm2Logs/iBlog.pid',
      env: {
        NODE_ENV: 'development',
        PORT: 3300
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3300
      },
      env_testing: {
        NODE_ENV: 'testing',
        PORT: 3300
      }
    }
  ]
}
