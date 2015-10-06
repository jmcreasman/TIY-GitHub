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

// For getting the api data to show up
// credit also to karlo for some of the logic and the following research resources
// layout taken and modified from https://api.jquery.com/jQuery.getJSON/ and
// http://stackoverflow.com/questions/5194268/replace-item-prices-in-html-tags-from-json-data
// and http://www.tutorialspoint.com/jquery/ajax-jquery-getjson.htm
// var creasman = "../apis/github/users/jmcreasman.json";
//
// $.ajax({
//     url: creasman
//     dataType: 'json',
//     success: function( data )
//     {
//
//
//         $('#name').text( );
//     }
// });
$.getJSON('apis/github/users/jmcreasman.json', function(data) {
  $('.name').html('<h1>' + data.name);
  $('.login').html('<h1>' + data.login);
  $('.company').html('<span>' + data.company);
  $('.location').html('<span>' + data.location);
  $('.email').html('<span>' + data.email);
  $('.blog').html('<span>' + data.blog);
  $('.created').html('<span>' + data.created_at);
});
