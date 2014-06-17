angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */

.factory('Details', function(){
	var details = {id: 100, name: 'Jan Karlo Bulawan', age: 29, gender: 'Male'};
	return details;
})

.factory('Persons',['$http', function($http){
	  var friends = [
	    { id: 0, name: 'Lorem 1' },
	    { id: 1, name: 'Lorem 2' },
	    { id: 2, name: 'Lorem 3' },
	    { id: 3, name: 'Lorem 5' }
	  ]; 	
	
	return {
	    submitRegistration: function(userName, userEmail, userPhone, successcb) {
	      var RegObj = {};
	      RegObj["SP_Name"] = "prc_user_reg";      
	      RegObj["userName"]= userName;
	      RegObj["userEmail"]= userEmail;
	      RegObj["userPhone"]= userPhone; 
	
	      $http.post('http://localhost/json/', RegObj)
	          .success(function (data, status, headers, config) 
	                {
	                    successcb(data);
	                    console.log(data);
	                })
	          .error(function (data, status, headers, config) 
	                {
	                  successcb("99");  
	                  alert("Oops something went wrong. Please login and try again. Sorry for the inconvenience.");               
	                });
	    },
	    getsjon: function($scope){
	      var RegObj = {};
	      RegObj["SP_Name"] = "prc_user_reg";	
	      
	   	  $http.jsonp("http://localhost/json/index.php?callback=JSON_CALLBACK")
	          .success(function (data, status, headers, config) 
	                {
	                  	//alert("success");
	                  	// successcb(data);
	                	// console.log(data);
	                    $scope.persons = data;	                    
	                })
	          .error(function (data, status, headers, config) 
	                {

	                  //successcb("99");  
	                  alert("Oops something went wrong. Please login and try again. Sorry for the inconvenience.");               
	                });	 
	        
	    }
	  }	
}])

.factory('Friends', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var friends = [
    { id: 0, name: 'Lorem 1' },
    { id: 1, name: 'Lorem 2' },
    { id: 2, name: 'Lorem 3' },
    { id: 3, name: 'Lorem 5' }
  ]; 

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});


/*
function FreshlyPressed($http, $log) {
    this.getBlogs = function($scope) {
        $http.jsonp("https://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK")
            .success(function(result) {
                $scope.posts = result.posts;  
                $scope.$broadcast("scroll.refreshComplete");
            });
    };
}
*/