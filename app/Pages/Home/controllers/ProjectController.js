(function() {

    angular.module('sh')

        .controller("ProjectController", ['$scope', 'DataService', function($scope, DataService) {

            $scope.projects = DataService.projects;

        }]);

})();
