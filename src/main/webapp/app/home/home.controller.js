(function () {
    'use strict';

    angular
        .module('signatureGenApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        var vm = this;
        vm.userDetails = null;

        vm.submit = function () {

            $http({
                method: 'post',
                url: '/generateSignature',
                data: vm.userDetails
            });
        };
    }
})();
