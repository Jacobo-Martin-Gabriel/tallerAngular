angular.module('app').factory('animalsFactory', [animalsFactory]);

function animalsFactory(){
	var module = {};
	var self = module;
	var animals = [
		{name: 'LION', isMammal: true},
		{name: 'SNAKE', isMammal: false},
		{name: 'SHARK', isMammal: true}
	];
	module.getAnimals = function(){
		return animals;
	};
	module.addAnimal=function(name, isMammal){
		animals.push({name: name, isMammal: isMammal});
	};
	return module;
};
