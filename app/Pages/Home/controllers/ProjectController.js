(function() {

    angular.module('sh')

        .controller("ProjectController", ['$scope', '$rootScope', '$filter', '$stateParams', '$window', 'ProjectsService', function($scope, $rootScope, $filter, $stateParams, $window, ProjectsService) {


            console.log(ProjectsService.projects);


            // $scope.ui = {
            //     mobileClick: function() {
            //         if($rootScope.responsive('<= medium') && !siteSettings.devMode) {
            //             $rootScope.runLoader();
            //         }
            //     }
            // };



        }]);

})();
