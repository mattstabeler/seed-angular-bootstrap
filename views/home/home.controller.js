(function() {
    'use strict';

    angular
        .module('mjs.seed-angular-bootstrap')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /*jshint latedef: false */
    /* @ngInject */
    function HomeController() {
        var vm = this;
        vm.actions = {};
        activate();

        ////////////////

        function activate() {

        }

    }
})();