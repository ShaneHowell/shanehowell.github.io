(function() {

    angular.module('sh')

        .controller("AboutController", ['$scope', 'DataService', function($scope, DataService) {

            $scope.about = DataService.about.copy;
            $scope.social = DataService.about.social;

        }]);

})();
