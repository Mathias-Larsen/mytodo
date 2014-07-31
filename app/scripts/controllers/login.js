'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
    .controller('LoginCtrl', function ($scope) {

        $scope.userRoles = [
            {name: 'Doctor', role: 'doctor'},
            {name: 'Claim Handler', role: 'ch'},
            {name: 'Developer', role: 'd'}
        ];

        $scope.userRoleSelect = '';

    });
