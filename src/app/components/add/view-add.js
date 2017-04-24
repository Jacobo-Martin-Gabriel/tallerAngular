(function(angular) {

  angular.module('app').component('viewAdd', {
    templateUrl:  'app/components/add/view-add-template.html',
    controller: ['animalsFactory', viewAdd],
    controllerAs: 'viewAdd'
  });

  function viewAdd(animalsFactory) {
    var vm = this;

    vm.$onInit = function() { 
      vm.showMsg = false;
      vm.showSuccessMsg=false;
      vm.formIsSend = false;     
    };

    vm.addAnimal = function() {
      vm.showSuccessMsg=false;
       var newAnimal = {
         name: vm.animalName, 
         img: vm.animalImg,
         type: vm.animalType
        };

        vm.formIsSend = true;    

        if ( !newAnimal.name || !newAnimal.img || !newAnimal.type ) {
          vm.showMsg = true;
        } else {
           vm.showMsg = false;
        }

      if ( !vm.showMsg ) {
        animalsFactory.addAnimal(newAnimal);
        vm.showSuccessMsg=true;
        vm.animalName='';
        vm.animalImg='';
        vm.animalType='';
        vm.formIsSend=false;

      }
    }
  }

})(angular);