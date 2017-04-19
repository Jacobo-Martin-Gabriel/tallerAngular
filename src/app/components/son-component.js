angular.module('app').component('sonComponent', {
	templateUrl: 'app/components/son-template.html',
	controller: sonController,
	controllerAs: 'sonController',
	bindings: {
		foo: '@',
		bar: '<',
		baz: '&'
	}
});

function sonController(){
	
};

