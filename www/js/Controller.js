app.controller('MenuCtrl', function($scope) {
  $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
           title: 'Keluar',
           template: 'Anda yakin ingin menutup aplikasi ini ?'
         });

         confirmPopup.then(function(res) {
           if(res) {
            //  console.log('You are sure');
            ionic.Platform.exitApp();
           } else {
             console.log('You are not sure');
           }
         });
       };
})

app.controller('BelajarIqroCtrl', function ($scope, $ionicPopup, $ionicPlatform) {
//   $ionicPlatform.registerBackButtonAction(function(event) {
//   if (true) { // your check here
//     $ionicPopup.confirm({
//       title: 'Keluar',
//       template: 'Anda yakin ingin menutup aplikasi ini ?'
//     }).then(function(res) {
//       if (res) {
//         ionic.Platform.exitApp();
//       }
//     })
//   }
// }, 100)
})

app.controller('TentangCtrl', function ($scope, $ionicPopup, $ionicPlatform) {
//   $ionicPlatform.registerBackButtonAction(function(event) {
//   if (true) { // your check here
//     $ionicPopup.confirm({
//       title: 'Keluar',
//       template: 'Anda yakin ingin menutup aplikasi ini ?'
//     }).then(function(res) {
//       if (res) {
//         ionic.Platform.exitApp();
//       }
//     })
//   }
// }, 100)
})

app.controller('HalamanCtrl', function ($scope, $ionicPlatform, $cordovaNativeAudio, $timeout) {
  $ionicPlatform.ready(function() {
   $cordovaNativeAudio.preloadSimple('click', 'audio/Alfasholallah.mp3')
   $cordovaNativeAudio.preloadSimple('a', 'audio/Suara001.mp3')
   .then(function (msg) {
      console.log(msg);
   }, function (error) {
      console.log(error);
   });

  //  $cordovaNativeAudio.preloadComplex('click', 'audio/Alfasholallah.mp3', 1, 1)
   //
  //  .then(function (msg) {
  //     console.log(msg);
  //  }, function (error) {
  //     console.error(error);
  //  });

})

$scope.playAudio = function () {
   $cordovaNativeAudio.play('click');
};

$scope.playA = function () {
   $cordovaNativeAudio.play('a');
};


});
