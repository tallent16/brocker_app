angular.module('App', ['ionic', 'firebase','ngCordova'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html'   
    })
    
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller: 'LoginCtrl'
    })

    .state('forget-password', {
      url: '/forget-password',
      templateUrl: 'views/forget-password/forget-password.html'   
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact/contact.html'    
    })

    .state('learn', {
      url: '/learn',
      templateUrl: 'views/learn/learn.html'     
    })

    .state('search', {
      url: '/search',
      templateUrl: 'views/org/search.html',
      controller: 'SearchAbnCtrl'
    })
    
    .state('select_accredition',{
      url: '/select_accredition',
     
      templateUrl: 'views/org/select_accredition.html',
      controller: 'SearchAbnCtrl'  
    })

    .state('selected_business',{
      url: '/selected_business',
      templateUrl: 'views/selected_business/selected_business.html'     
    })

    .state('select_again',{
      url: '/select_again',
      templateUrl: 'views/select_again/select_again.html'     
    })

    .state('submission',{
      url: '/submission',
      templateUrl: 'views/submission/submission.html'     
    })

    .state('contact_form',{
      url: '/contact_form',
      templateUrl: 'views/contact_form/contact_form.html',
      controller: 'ContactCtrl'

    })

    .state('logout',{
      url: '/logout',
      templateUrl: 'views/logout/logout.html'     
    })

    .state('home_page',{
      url: '/home_page',
      templateUrl: 'views/home_page/home_page.html'     
    })

    .state('my_quotes',{
      url: '/my_quotes',
      templateUrl: 'views/my_quotes/my_quotes.html'     
    })

    .state('new_quote',{
      url: '/new_quote',
      templateUrl: 'views/new_quote/new_quote.html'  
    })

    .state('current_quote',{
      url: '/current_quote',
      templateUrl: 'views/current_quote/current_quote.html'  
    })

    .state('calculated_result',{
      url: '/calculated_result',
      templateUrl: 'views/calculated_result/calculated_result.html'  
    })
    
    .state('my_application',{
      url: '/my_application',
      templateUrl: 'views/my_application/my_application.html'  
    })

    .state('new_application',{
      url: '/new_application',
      templateUrl: 'views/new_application/new_application.html'  
    })

     .state('appsearch_result',{
      url: '/appsearch_result',
      templateUrl: 'views/appsearch_result/appsearch_result.html'  
    })
     
    .state('application_submit',{
      url: '/application_submit',
      templateUrl: 'views/application_submit/application_submit.html'  
    })

    .state('existing_app',{
      url: '/existing_app',
      templateUrl: 'views/existing_app/existing_app.html'  
    })

     .state('personal_auto',{
      url: '/personal_auto',
      templateUrl: 'views/personal_auto/personal_auto.html'  
    })

     .state('products',{
      url: '/products',
      templateUrl: 'views/products/products.html'  
    })

    .state('all',{
      url: '/all',
      templateUrl: 'views/all/all.html'  
    });

  $urlRouterProvider.otherwise('/');
})

.run(function($ionicPlatform, $location) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });



  var firstVisit = localStorage.getItem('firstVisit');
  if (!firstVisit) {
    // alert("first firstVisit");
    $location.url('/');
  }
})


// .factory('OrgDetailService', function () {
//   var service= ["tushar","bhatia"];
//   return service;
// });

.service('OrgDetailService', function() {
    this.getDetail = function(id) { 
      hash_r={}
      hash_r.id=id;
      hash_r.name="name selected";

      return hash_r
    };

});

