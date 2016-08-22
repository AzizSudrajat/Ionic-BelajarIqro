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

    .state('app.halaman1', {
        url: '/halaman1',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman1.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman2', {
        url: '/halaman2',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman2.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman3', {
        url: '/halaman3',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman3.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman4', {
        url: '/halaman4',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman4.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman5', {
        url: '/halaman5',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman5.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman6', {
        url: '/halaman6',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman6.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman7', {
        url: '/halaman7',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman7.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman8', {
        url: '/halaman8',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman8.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman9', {
        url: '/halaman9',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman9.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman10', {
        url: '/halaman10',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman10.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman11', {
        url: '/halaman11',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman11.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman12', {
        url: '/halaman12',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman12.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman13', {
        url: '/halaman13',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman13.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman14', {
        url: '/halaman14',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman14.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman15', {
        url: '/halaman15',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman15.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman16', {
        url: '/halaman16',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman16.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman17', {
        url: '/halaman17',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman17.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman18', {
        url: '/halaman18',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman18.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman19', {
        url: '/halaman19',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman19.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman20', {
        url: '/halaman20',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman20.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman21', {
        url: '/halaman21',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman21.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman22', {
        url: '/halaman22',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman22.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman23', {
        url: '/halaman23',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman23.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman24', {
        url: '/halaman24',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman24.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman25', {
        url: '/halaman25',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman25.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman26', {
        url: '/halaman26',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman26.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman27', {
        url: '/halaman27',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman27.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman28', {
        url: '/halaman28',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman28.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman29', {
        url: '/halaman29',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman29.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman30', {
        url: '/halaman30',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman30.html',
                controller: 'HalamanCtrl'
            }
        }
    })

    .state('app.halaman31', {
        url: '/halaman31',
        views: {
            'menuContent': {
                templateUrl: 'templates/Halaman31.html',
                controller: 'HalamanCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/belajariqro');
});
