// (function() {
//  // the code here is executed once in its own scope
//  var octocatResult = $.ajax({ url: "../../apis/github/users/octocat.jason" });
//   console.log(octocatResult);
// })();

(function() {
jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
 console.log(arguments);
});
})();
