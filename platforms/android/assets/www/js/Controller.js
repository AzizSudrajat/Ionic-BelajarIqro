app.controller('MenuCtrl', function($scope,$ionicPopup) {
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

app.controller('BelajarIqroCtrl', function ($scope) {

})

app.controller('TentangCtrl', function ($scope) {

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


})

app.controller('Helaian2Ctrl', function ($scope) {

})

app.controller('Helaian31Ctrl', function ($scope) {

});
