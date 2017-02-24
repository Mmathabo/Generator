(function () {
    'use strict';

    angular
        .module('signatureGenApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$http'];

    function HomeController($scope, $http) {
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
