(function() {

    // Global Module
    var sh = angular.module('sh', [
                                    "ui.router",
                                    "ngAnimate",
                                  ]);

    sh.run(['$rootScope', '$state', '$timeout', function($rootScope, $state, $timeout) {

        $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {

            // Add the previous state to the global scope
            $rootScope.previousState = (from.name) ? from.name : 'root.home';

        });

    }]);

})();
