'use strict';

angular.module('yoHackerNewsApp')
  .config(function ($routeProvider) {
     $routeProvider
      .when('/post', {
        templateUrl: 'app/post/post.html',
        controller: 'PostsController'
      });
  });