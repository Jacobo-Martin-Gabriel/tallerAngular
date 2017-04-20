angular.module('app').component('animalscardsComponent',{
	templateUrl: 'app/components/animals/animalscards-template.html',
	controller: ['animalsFactory', animalscardsController],
	controllerAs: 'animalsController',
});

function animalscardsController(animalsFactory){
	var vm = this;
	vm.$onInit = function(){
		vm.animals = animalsFactory.getAnimals();

	};
};
