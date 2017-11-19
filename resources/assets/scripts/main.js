// import external dependencies
import 'jquery';

// Import everything from autoload
import "./autoload/**/*"

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';
import onePageCheckout from './routes/opc';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
  // One Page Checkout
  onePageCheckout,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());
