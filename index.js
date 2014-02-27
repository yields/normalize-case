
/**
 * Module dependencies.
 */

var camelize = require('case').camel;
var type;

try {
  type = require('component-type');
} catch (e) {
  type = require('type');
}

/**
 * Expose `normalize`
 */

module.exports = normalize;

/**
 * Normalize all keys of `obj` recursively.
 *
 * @param {Object} obj
 * @return {Object}
 * @api public
 */

function normalize(obj){
  var ret = obj;

  if ('array' == type(obj)) {
    ret = [];
    for (var i = 0; i < obj.length; ++i) {
      ret.push(normalize(obj[i]));
    }
  }

  if ('object' == type(obj)) {
    ret = {};
    for (var k in obj) {
      ret[camelize(k)] = normalize(obj[k]);
    }
  }

  return ret;
};
