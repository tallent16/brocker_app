console.log("search file");
angular.module('App').controller('SearchAbnCtrl', function ($scope, $ionicLoading,$http, $timeout, $ionicModal, $ionicLoading, $ionicPopup, $location) {
console.log("SearchAbnCtrl controller");
    $scope.submit_abn = function () {
	  	console.log("submit");

	 $ionicLoading.show({
      template: '<i class="ion-loading-a"></i>'
    });

	  	// $location.url('/search_result');
	$http.get("https://damp-peak-59248.herokuapp.com/organisations")
    .then(function(response) {
        $scope.searchResult = response.data;
         $ionicLoading.hide();
    });
  }// search abn ends here

$scope.orgDetail = function () {
console.log("orgdetailss");

	$location.url('/select_accredition');

}

});
