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

$scope.orgDetail = function (id_abn) {
console.log("orgdetailss");
console.log('/select_accredition?id='+id_abn);

	$location.url('/select_accredition?id='+id_abn);

}

});
angular.module('App').controller('DetailAbnCtrl', function ($scope, $ionicLoading,$http, $timeout, $ionicModal, $ionicLoading, $ionicPopup, $location) {
console.log("detail abn contr");
console.log($location.search().id);
$scope.idSelected = $location.search().id;


$scope.selectBusiness =function( id_sel ){
  console.log('id_sel');
  console.log(id_sel);
}

});