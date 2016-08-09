var meApp = angular.module('meApp', []);

meApp.controller('meController', function($scope){
	$scope.myColor = "red";

	var Student = function(name, formerly){
		this.name = name;
		this.former = formerly;
	}
	$scope.students = [];

	$scope.students.push(new Student('Brett', 'USAF'));
	$scope.students.push(new Student('Wes', 'wildcat'));
	$scope.students.push(new Student('Drew', 'Westminster Wildcat'));
	$scope.students.push(new Student('Daniel', 'Cheering for Argentina in Rio'));
	$scope.students.push(new Student('Danielle', 'Like\'s the Who'));
	$scope.students.push(new Student('Dan', 'Lego Nerd'));
	$scope.students.push(new Student('Keith', 'David Copperfield'));
	$scope.students.push(new Student('Danny', 'Strat Ruiner'));
	$scope.students.push(new Student('Alex', 'Assassin'));
	$scope.students.push(new Student('Paige', 'Burnt Easily'));
	$scope.students.push(new Student('Dave', 'Cam Lover'));
	$scope.students.push(new Student('Erik', 'Useless without BS'));
	$scope.students.push(new Student('Shirlette', 'Where the heck is she?'));
	$scope.students.push(new Student('Jackson', 'Volition Dev'));
	$scope.students.push(new Student('JT', 'Every woman\'s dream'));
	$scope.students.push(new Student('Summer', 'CS Ninja'));

});