
var Classes = require('classes');
var load = require('load-script');


/**
 * Expose `typekit`.
 */

module.exports = typekit;


/**
 * HTML element.
 */

var html = document.getElementsByTagName('html')[0];
var classes = Classes(html);


/**
 * Load a Typekit kit with `id` and `options`.
 *
 * @param {String} id
 * @param {Object} options (optional)
 *   @property {Number} timeout
 */

function typekit (id, options) {
  options = options || {};
  classes.add('wf-loading');
  var t = timeout(options.timeout || 3000);

  load('//use.typekit.net/' + id + '.js', function (err, e) {
    if (err) return;
    clearTimeout(t);
    try {
      window.Typekit.load();
    } catch (e) {}
  });
}


/**
 * Set a timeout to add the inactive class after `duration`.
 *
 * @param {Number} duration
 */

function timeout (duration) {
  return setTimeout(function () {
    classes.remove('wf-loading').add('wf-inactive');
  }, duration);
}