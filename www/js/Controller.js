app.controller('MenuCtrl', function($scope, $ionicPopup) {
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

})

app.controller('HijaiyahCtrl', function ($scope) {

})

app.controller('TentangCtrl', function ($scope, $ionicPopup, $ionicPlatform) {

})

app.controller('HalamanCtrl', function ($scope, $ionicPlatform, $cordovaNativeAudio) {
  $ionicPlatform.ready(function() {
   $cordovaNativeAudio.preloadSimple('1', 'audio/Suara1.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('2', 'audio/Suara2.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('3', 'audio/Suara3.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('4', 'audio/Suara4.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('5', 'audio/Suara5.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('6', 'audio/Suara6.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('7', 'audio/Suara7.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('8', 'audio/Suara8.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('9', 'audio/Suara9.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('10', 'audio/Suara10.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('11', 'audio/Suara11.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('12', 'audio/Suara12.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('13', 'audio/Suara13.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('14', 'audio/Suara14.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('15', 'audio/Suara15.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('16', 'audio/Suara16.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('17', 'audio/Suara17.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('18', 'audio/Suara18.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('19', 'audio/Suara19.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('20', 'audio/Suara20.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('21', 'audio/Suara21.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('22', 'audio/Suara22.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('23', 'audio/Suara23.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('24', 'audio/Suara24.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('25', 'audio/Suara25.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('26', 'audio/Suara26.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('27', 'audio/Suara27.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('28', 'audio/Suara28.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
   $cordovaNativeAudio.preloadSimple('29', 'audio/Suara29.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
  //  .then(function (msg) {
  //     console.log(msg);
  //  }, function (error) {
  //     console.log(error);
  //  });
})

$scope.play1 = function () {
   $cordovaNativeAudio.play('1');
};

$scope.play2 = function () {
   $cordovaNativeAudio.play('2');
};

$scope.play3 = function () {
   $cordovaNativeAudio.play('3');
};

$scope.play4 = function () {
   $cordovaNativeAudio.play('4');
};

$scope.play5 = function () {
   $cordovaNativeAudio.play('5');
};

$scope.play6 = function () {
   $cordovaNativeAudio.play('6');
};

$scope.play7 = function () {
   $cordovaNativeAudio.play('7');
};

$scope.play8 = function () {
   $cordovaNativeAudio.play('8');
};

$scope.play9 = function () {
   $cordovaNativeAudio.play('9');
};

$scope.play10 = function () {
   $cordovaNativeAudio.play('10');
};

$scope.play11 = function () {
   $cordovaNativeAudio.play('11');
};

$scope.play12 = function () {
   $cordovaNativeAudio.play('12');
};

$scope.play13 = function () {
   $cordovaNativeAudio.play('13');
};

$scope.play14 = function () {
   $cordovaNativeAudio.play('14');
};

$scope.play15 = function () {
   $cordovaNativeAudio.play('15');
};

$scope.play16 = function () {
   $cordovaNativeAudio.play('16');
};

$scope.play17 = function () {
   $cordovaNativeAudio.play('17');
};

$scope.play18 = function () {
   $cordovaNativeAudio.play('18');
};

$scope.play19 = function () {
   $cordovaNativeAudio.play('19');
};

$scope.play20 = function () {
   $cordovaNativeAudio.play('20');
};

$scope.play21 = function () {
   $cordovaNativeAudio.play('21');
};

$scope.play22 = function () {
   $cordovaNativeAudio.play('22');
};

$scope.play23 = function () {
   $cordovaNativeAudio.play('23');
};

$scope.play24 = function () {
   $cordovaNativeAudio.play('24');
};

$scope.play25 = function () {
   $cordovaNativeAudio.play('25');
};

$scope.play26 = function () {
   $cordovaNativeAudio.play('26');
};

$scope.play27 = function () {
   $cordovaNativeAudio.play('27');
};

$scope.play28 = function () {
   $cordovaNativeAudio.play('28');
};

$scope.play29 = function () {
   $cordovaNativeAudio.play('29');
};


});
