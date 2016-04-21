angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
   
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  .state('tab.one', {
    url: '/one',
    views: {
      'tab-one': {
        templateUrl: 'templates/tab-one.html',
        controller: 'oneCtrl'
      }
    }
  })

  .state('tab.two', {
      url: '/two',
      views: {
        'tab-two': {
          templateUrl: 'templates/tab-two.html',
          controller: 'twoCtrl'
        }
      }
    })
  
  .state('tab.three', {
    url: '/three',
    views: {
      'tab-three': {
        templateUrl: 'templates/tab-three.html',
        controller: 'threeCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/one');

});
