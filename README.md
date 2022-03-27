# Webpack Boilerplate

Webpack Boilerplate

Change Title. Setup as necessary.

If using jsonwebtokens:
npm i stream-browserify crypto-browserify util

Also uncomment lines 27-31 in webpack config (Might also need to uncomment process plugin loader on line 135-137)

For static assets, uncomment the line for the plugin import and the plugin provider. Be sure to provide a path for the assets. IE:

{
  from: 'static/imgs',
  to: 'static/imgs'
}

etc.

Redux and testing suites also need configs. Again, see cfl-front or JaMmusic for examples.