const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..' ,'..', dir)
}

module.exports = {
    title: 'YT UI',
    base: '/yt-ui/',
    description: 'YT UI Document',
    head: [
      ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ]
}
