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

});
