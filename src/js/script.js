'use strict';
// IE9 - 11
// import 'core-js/stable';
// require('es6-promise/auto');
// require('mdn-polyfills/Node.prototype.append');
// require('mdn-polyfills/Node.prototype.remove');
// require('mdn-polyfills/Element.prototype.matches');
// require('formdata-polyfill');
// import 'unfetch/polyfill';
import isWebP from './modules/webp';
import sliders from './modules/slick-slider';
import newTab from './modules/tabs';

// import burger from './modules/burger';
// import sendMail from './modules/email';
// import { closeModalListener } from './modules/modal';
// import scrollUp from './modules/scrollUp';
// import { enableScroll, disableScroll } from './modules/scrollSwitcher';

window.addEventListener("DOMContentLoaded", () => {
	isWebP();
	sliders();
	newTab('.search__tabs-item', 'search__tabs-item--active', '.search__content-item', 'search__content-item--active');
});