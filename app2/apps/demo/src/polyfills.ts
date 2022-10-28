/**
 * Polyfill stable language features. These imports will be optimized by `@babel/preset-env`.
 *
 * See: https://github.com/zloirock/core-js#babel
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import ReactDOM from 'react-dom';
import React from 'react';
import * as PropTypes from 'prop-types';

window['React'] = React;
window['React']['PropTypes'] = PropTypes;
window['ReactDOM'] = ReactDOM;
console.log(`PropTypes:`,PropTypes);

// setTimeout(() => {
//   const s = document.createElement('script');
//   s.src = 'https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js';
//   document.head.append(s);
//   // document.head.scri
// }, 100);