const webpack = require('webpack'),
      path    = require('path'),
      package = require('./package');

const banner = `${package.name} ${package.version} - ${package.description}\nCopyright (c) ${ new Date().getFullYear() } ${package.author} - ${package.homepage}\nLicense: ${package.license}`;

module.exports = {
    'context': path.join(__dirname, '/src'),
    'entry': './index.js',
    'output': {
        'path': __dirname + '/dist',
        'filename': `${package.name}.min.js`,
        'library': `inView`,
        'libraryTarget': 'umd'
    },
    'module': {
        'loaders': [{
            'test': /\.js$/,
            'exclude': /node_modules/,
            'loader': 'babel'
        }]
    },
    'plugins': [
        new webpack.BannerPlugin(banner)
    ]
};
