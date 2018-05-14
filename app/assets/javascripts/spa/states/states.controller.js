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

        activate();

        ////////////////

        function activate() {
        	newState();
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

        }

        function update() {

        }

        function remove() {

        }

        function removeElement(elements, element) {

        }
    }
})();