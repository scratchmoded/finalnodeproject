'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'link': '/'
  },
{
'title':'Posts',
'link':'/post'

  }];

  isCollapsed = true;
  //end-non-standard

  constructor($location) {
    this.$location = $location;
    }

  isActive(route) {
    return route === this.$location.path();
  }
}


angular.module('yoHackerNewsApp')
  .controller('NavbarController', NavbarController);
