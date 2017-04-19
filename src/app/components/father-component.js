angular.module('app').component('fatherComponent',{
	templateUrl: 'app/components/father-template.html',
	controller: fatherController,
	controllerAs: 'fatherController',
});

function fatherController(){
	vm = this;
	vm.$onInit = function(){
		vm.prop = 'Propiedad dentro del padre';
		vm.propBooleana = true;
		vm.bar= 'Bar declarada dentro de fatherController';
		vm.baz='Baz';
		vm.setBaz = function(){
			vm.baz='Baz cambiada';
		};
		vm.frutas= ['Naranja', 'Manzana', 'Fresa'];
	};
}
