(function() {
 // the code here is executed once in its own scope
 var octocatResult = $.ajax({ url: "../../apis/github/users/octocat.jason" });
  console.log(octocatResult);
})();
