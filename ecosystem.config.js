module.exports = {
  apps: [
    {
      name: 'pm2_deploy',
      script: 'app.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      // args: 'one two',
      instances: 1,
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
      key: '~/.ssh/google_rsa',
      user: 'xiawang1024',
      host: '35.194.208.201',
      ref: 'origin/master',
      repo: 'git@github.com:xiawang1024/pm2.git',
      path: '/home/xiawang1024/work/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
