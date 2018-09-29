const sass = require('node-sass');

/**
 * Compile SCSS with sassy-beam
 *
 * @param {string} scss SCSS to compile
 * @returns {Promise} compiled CSS
 */
function compile(scss) {
  const data = `
    @import 'sassy-beam';
    ${scss}
  `;

  return new Promise((resolve, reject) => {
    sass.render({
      data,
      includePaths: ['scss'],
      outputStyle: 'compact',
    }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.css.toString());
      }
    });
  });
}

module.exports = compile;
