const gulp = require('gulp');
const less = require('gulp-less')
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css')

// css
const postcss = require('gulp-postcss');

// HACK
const concat = require('gulp-concat')
const inject = require('gulp-inject-string')

// ENV
const env = process.env.NODE_ENV || 'development';
const prod = env === 'production';

const paths = {
  less: ['semantic/dist/components/site.css', 'semantic/dist/components/reset.css']
}

gulp.task('css', () => {
  let plugins = [
    require('precss')({}), // eslint-disable-line
    require('autoprefixer')({}), // eslint-disable-line
  ]

  if (prod) {
    plugins = [
      require('cssnano'), // eslint-disable-line
    ].concat(plugins);
  }

  const header = 'module.exports = \`'
//   const header = "// Automatically created 
//   // until next.js gets CSS support
// // https://github.com/zeit/next.js/issues/544
// export const Styles = () => (
//   <style>{"

  const footer = `\``

//   export default Styles

  return gulp.src(paths.less)
    .pipe(plumber())
    // .pipe(less())
    .pipe(cleanCSS({ format: 'beautify' }))
    .pipe(postcss(plugins, { syntax: require('postcss-less')}))
    .pipe(concat('Styles.js'))
    .pipe(inject.prepend(header))
    .pipe(inject.append(footer))
    .pipe(gulp.dest('components'));
});

gulp.task('dev', () => {
  gulp.watch([paths.less], ['css']);
})
