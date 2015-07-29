(function() {

    angular.module('sh')

        .controller("DetailsController", ['$scope', '$filter', '$stateParams', 'ProjectsService', function($scope, $filter, $stateParams, ProjectsService) {

            $scope.project = $filter('filter')(ProjectsService.projects, {
                slug: $stateParams.slug
            }, true)[0];

        }]);

})();
