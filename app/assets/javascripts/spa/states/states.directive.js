(function() {
    'use strict';

    angular
        .module('spa.states')
        .directive('spaStates', StatesDirective);

    StatesDirective.$inject = ['spa.APP_CONFIG'];

    /* @ngInject */
    function StatesDirective(APP_CONFIG) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
        	templateUrl: APP_CONFIG.states_html,
        	replace: true,
            bindToController: true,
            controller: 'spa.states.StatesController',
            controllerAs: 'statesVM',
            restrict: 'E',
            scope: {},
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
        	console.log("StatesController", scope);
        }
    }
})();