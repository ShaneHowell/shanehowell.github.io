(function() {

    angular.module('sh')

        .controller("ProjectController", ['$scope', 'ProjectsService', function($scope, ProjectsService) {

            console.log(ProjectsService.projects);

        }]);

})();
