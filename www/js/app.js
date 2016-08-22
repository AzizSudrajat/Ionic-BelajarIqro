// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic', 'ionic-material', 'ngCordova']);
app.run(function ($ionicPlatform,$ionicPopup) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
    $ionicPlatform.registerBackButtonAction(function(event) {
    if (true) { // your check here
      $ionicPopup.confirm({
        title: 'Keluar',
        template: 'Anda yakin ingin menutup aplikasi ini ?'
      }).then(function(res) {
        if (res) {
          ionic.Platform.exitApp();
        }
      })
    }
  }, 100);
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
    })

    .state('app.tentang', {
        url: '/tentang',
        views: {
            'menuContent': {
                templateUrl: 'templates/tentang.html',
                controller: 'TentangCtrl'
            }
        }
    })

    .state('app.belajariqro', {
        url: '/belajariqro',
        views: {
            'menuContent': {
                templateUrl: 'templates/belajariqro.html',
                controller: 'BelajarIqroCtrl'
            }
        }
    })

    .state('app.helaian1', {
        url: '/helaian1',
        views: {
            'menuContent': {
                templateUrl: 'templates/helaian1.html',
                controller: 'Helaian1Ctrl'
            }
        }
    })

    .state('app.helaian2', {
        url: '/helaian2',
        views: {
            'menuContent': {
                templateUrl: 'templates/helaian2.html',
                controller: 'Helaian2Ctrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/belajariqro');
});
