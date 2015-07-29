(function() {

    angular.module('sh')

        .controller("ProjectController", ['$scope', 'ProjectsService', function($scope, ProjectsService) {

            $scope.projects = ProjectsService.projects;

            console.log($scope.projects);

        }]);

})();
