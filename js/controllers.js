angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Persons) {
	//$scope.persons = "Persons here!";	
	Persons.getsjon($scope);
})

.controller('PersonCtrl', function($scope) {
	//$scope.persons = "Persons here!";	
})

.controller('MoreCtrl', function($scope) {
	$scope.more = "Oh Yeah!!!";	
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, $stateParams, Details) {
	$scope.details = Details;
});