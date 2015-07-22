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

            // Check if scroll should reset to top.
            $rootScope.toTop = to.data.resetScroll;

            // If toTop is set to true or not set, scroll to top.
            if($rootScope.toTop == true || $rootScope.toTop == undefined) {
                scroll(0,0);
            }

        });

    }]);

})();
