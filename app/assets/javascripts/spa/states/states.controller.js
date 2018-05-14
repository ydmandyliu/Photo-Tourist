(function() {
    'use strict';

    angular
        .module('spa.states')
        .controller('spa.states.StatesController', StatesController);

    StatesController.$inject = ["spa.states.State"];

    /* @ngInject */
    function StatesController(State) {
        var vm = this;
        vm.states;
        vm.state;
        vm.edit = edit;
        vm.create = create;
        vm.update = update;
        vm.remove = remove;

        activate();

        ////////////////

        function activate() {
        	newState();
            vm.states = State.query();
        }

        function newState() {
        	vm.state = new State();
        }

        function handleError(response) {
        	console.log(response);
        }

        function edit(object, index) {

        }

        function create() {
            vm.state.$save()
                .then(function(response){
                    //console.log(response);
                    vm.states.push(vm.state);
                    newState();
                })
                .catch(handleError);
        }

        function update() {

        }

        function remove() {

        }

        function removeElement(elements, element) {

        }
    }
})();