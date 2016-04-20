console.log("search file");
angular.module('App').controller('SearchAbnCtrl', function ($scope, $ionicLoading,$http, $timeout, $ionicModal, $ionicLoading, $ionicPopup, $location,OrgDetailService) {
console.log("SearchAbnCtrl controller");
$scope.search_abn = "";
$scope.idSelected = "";


$scope.searchload =function(){
console.log("page loaded");
$scope.idSelected = $location.search().id;

console.log(OrgDetailService);

org=OrgDetailService.getDetail($location.search().id);
$scope.search_abn = org.name;



}


$scope.selectBusineesClick = function(id){

  console.log(id);
  $location.url('/select_again?id='+id);
}

$scope.submit_abn = function () {

	 $ionicLoading.show({
      template: '<i class="ion-loading-a"></i>'
    });
	$http.get("https://damp-peak-59248.herokuapp.com/organisations")
    .then(function(response) {
      $scope.idSelected;
      $scope.searchResult = response.data;
      $ionicLoading.hide();
    });
  }// search abn ends here

$scope.orgDetail = function (id_abn) {
console.log("orgdetailss");
console.log('/select_accredition?id='+id_abn);
	$location.url('/select_accredition?id='+id_abn);
}

$scope.idSelected = $location.search().id;


$scope.selectBusiness =function( id_sel ){
  console.log('id_sel');
  console.log(id_sel);

  var id=id_sel;

  $location.url('/search?id='+id);
  

}

});