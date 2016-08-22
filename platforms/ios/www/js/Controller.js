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

// app.controller('Helaian1Ctrl', function ($scope, $ionicPlatform, $timeout, $cordovaNativeAudio) {
//     var vm = this;
//
//   $ionicPlatform.ready(function() {
//
//         $cordovaNativeAudio.preloadSimple('a', 'audio/Alfasholallah.mp3');
//         $cordovaNativeAudio.preloadSimple('ba', 'audio/Alfasholallah.mp3');
//     });
//
//     vm.play = function(sound) {
//         $cordovaNativeAudio.play(sound);
//     };
//
//     return vm;
//
// })


app.controller('Helaian2Ctrl', function ($scope) {

})

app.controller('Helaian31Ctrl', function ($scope) {

})

app.controller('Helaian2Ctrl', ['$ionicPlatform', '$timeout',  '$cordovaNativeAudio', Helaian2Ctrl]);

function Helaian2Ctrl($ionicPlatform, $timeout, $cordovaNativeAudio) {
    var vm = this;

    $ionicPlatform.ready(function() {

        // all calls to $cordovaNativeAudio return promises

        $cordovaNativeAudio.preloadSimple('snare', 'audio/snare.mp3');
        $cordovaNativeAudio.preloadSimple('hi-hat', 'audio/highhat.mp3');
        $cordovaNativeAudio.preloadSimple('bass', 'audio/bass.mp3');
        $cordovaNativeAudio.preloadSimple('bongo', 'audio/bongo.mp3');
    });

    vm.play = function(sound) {
        $cordovaNativeAudio.play(sound);
    };

    return vm;
}
