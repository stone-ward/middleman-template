# Middleman Template

The base Middleman application used at [Stone Ward], ready to deploy
to [Netlify].

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/stone-ward/middleman-template)

  [Stone Ward]: https://stoneward.com/
  [Netlify]: https://www.netlify.com/

## Configuration

This template uses [Webpack] for asset processing through the external pipeline. Features include:

- [Sass]
- [Autoprefixer]
- [Babel]

  [Webpack]: https://webpack.js.org/
  [Sass]: https://sass-lang.com
  [Autoprefixer]: https://github.com/postcss/autoprefixer
  [Babel]: https://babeljs.io

## Use

`middleman init MY_PROJECT_FOLDER -T git@github.com:stone-ward/middleman-template.git`

`cd MY_PROJECT_FOLDER`

Install dependencies:

`bundle`

`yarn`

Server:

`bundle exec middleman`

Build:

`bundle exec middleman build`