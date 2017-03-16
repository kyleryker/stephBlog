angular.module('starFinder', [`ui.router`])
.config(function ($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home', {
    templateUrl:'home/home.html',
    controller: 'mainCtrl',
    url: '/'
  })
  .state('character', {
    templateUrl:'character/character.html',
    controller: 'mainCtrl',
    url:'/character'
  })
  .state('planet', {
    templateUrl: 'planet/planet.html',
    controller: 'mainCtrl',
    url:'/planet'
  })
  .state('species', {
    templateUrl: 'species/species.html',
    controller:'mainCtrl',
    url: 'species'
  })
  .state('ship', {
    templateUrl: 'ship/ship.html',
    controller:'mainCtrl',
    url: '/ship'
  })
  .state('vehicle', {
    templateUrl: 'vehicle/vehicle.html',
    controller: 'mainCtrl',
    url: '/vehicle'
  });
  $urlRouterProvider.otherwise('/');
})
