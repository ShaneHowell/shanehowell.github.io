(function() {

    angular.module('sh')

        .controller("DetailsController", ['$scope', '$filter', '$stateParams', 'DataService', function($scope, $filter, $stateParams, DataService) {

            $scope.project = $filter('filter')(DataService.projects, {
                slug: $stateParams.slug
            }, true)[0];

            $scope.np = {
                next: DataService.getNextProject($scope.project),
                prev: DataService.getPrevProject($scope.project)
            };

            $scope.pageTitle = DataService.getProjectTitle($scope.project);

        }]);

})();
