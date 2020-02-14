const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..' ,'..', dir)
}

module.exports = {
    title: 'Ange UI',
    base: '/ange-ui/',
    description: 'Ange UI Document',
    head: [
      ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ]
}