console.log("contact form");
angular.module('App').controller('ContactCtrl', function ($scope,$cordovaCamera,$cordovaImagePicker,$location) {
 console.log("in controller");

  $scope.uploadFiles = function () {
    console.log("uploadFiles ");


      var options = {
   maximumImagesCount: 10,
   width: 800,
   height: 800,
   quality: 80
  };

  $cordovaImagePicker.getPictures(options)
    .then(function (results) {
      var images_name=[];
      for (var i = 0; i < results.length; i++) {
        $scope.images_url= results[i];
        console.log('Image URI: ' + results[i]);

        images_name.push(results[i].replace(/^.*[\\\/]/, ''));

      }

    $scope.truncatedimgname = images_name;
    }, function(error) {
      // error getting photos
    });

  }



$scope.send_details = function(){

  $location.url('/submission');

}

});
