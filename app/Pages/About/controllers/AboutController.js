(function() {

    angular.module('sh')

        .controller("AboutController", ['$scope', 'AboutService', function($scope, AboutService) {

            $scope.about = AboutService.about;

            console.log($scope.about);

        }]);

})();
