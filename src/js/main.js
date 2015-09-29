(function() {
 // the code here is executed once in its own scope
 var octocatResult = $.ajax({ url: "https://api.github.com/users/octocat" });
  console.log(octocatResult);
})();
