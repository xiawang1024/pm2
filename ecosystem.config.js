module.exports = {
  apps: [
    {
      name: 'API',
      script: 'app.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      // args: 'one two',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'xiawang1024',
      host: 'https://github.com',
      ref: 'origin/master',
      repo: 'https://github.com/xiawang1024/pm2.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
