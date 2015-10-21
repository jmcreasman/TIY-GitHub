// (function() {
//  // the code here is executed once in its own scope
//  var octocatResult = $.ajax({ url: "../../apis/github/users/octocat.jason" });
//   console.log(octocatResult);
// })();


// (function() {
// jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
//  console.log(arguments);
// });
// })();


// tabs
jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});

;(function(){

  angular.module('TIY-GitHub', [ ])
    .run(function($http, $rootScope){

      $http.get('apis/github/users/jmcreasman.json')
        .then(function (response){
          $rootScope.user = response.data;
        });

    })

    .run(function($http, $rootScope){

      $http.get('apis/github/users/octocat/repositories.json')
        .then(function (response){
          $rootScope.repos = response.data;
        });

    })

    // .run(function($http, $rootScope){
    //
    //   $http.get('apis/github/users/jmcreasman/comments.json')
    //     .then(function (response){
    //       $rootScope.comments = response.data;
    //     });
    //
    // })

    .run(function($http, $rootScope){

      $http.get('apis/github/users/jmcreasman/comments.json')
        .then(function (response){
          $rootScope.comments = response.data;
        });

    })

    // .run(function($http, $rootScope){
    //
    //   $http.get("https://api.github.com/repos/TIY-Durham/2015-FALL-FEE/issues/510/comments")
    //     .then(function (response){
    //       $rootScope.comments = response.data;
    //     });
    //
    // })

})(); //END IIFE
