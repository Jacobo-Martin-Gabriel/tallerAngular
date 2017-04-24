angular.module('app').component('viewEdit', {
    templateUrl:  'app/components/edit/view-edit-template.html',
    controller: ['animalsFactory', viewEdit],
    controllerAs: 'viewEdit'
  });

  function viewEdit(animalsFactory){
    var vm = this;
    vm.$onInit= function(){
      vm.showForm=false;
      vm.allAnimals=animalsFactory.getAllAnimals();
      vm.formIsSend = false;   
      vm.animalSelected=''; 
    };
    vm.editAnimal = function() {
      vm.showSuccessMsg=false;
      vm.showForm=true;
      vm.animalName=vm.allAnimals[vm.animalSelected].name;
      vm.animalImg=vm.allAnimals[vm.animalSelected].img;
      vm.animalType=vm.allAnimals[vm.animalSelected].type;
    }
    vm.updateAnimal=function(){
       var newAnimal = {
         id: vm.allAnimals[vm.animalSelected].id,
         name: vm.animalName, 
         img: vm.animalImg,
         type: vm.animalType
        };

        vm.formIsSend = true;    

        if ( !newAnimal.name || !newAnimal.img || !newAnimal.type ) {
          vm.showErrorMsg = true;
        } else {
           vm.showErrorMsg = false;
        }

      if ( !vm.showErrorMsg ) {
        animalsFactory.editAnimal(newAnimal);
        vm.showSuccessMsg=true;
        vm.animalName='';
        vm.animalImg='';
        vm.animalType='';
        vm.animalSelected='';
        vm.formIsSend=false;

      }
    }
  


  };