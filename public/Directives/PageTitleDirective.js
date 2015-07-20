(function() {

    // Call the module from app.
    angular.module('sh')

        .directive('updateTitle', ['$rootScope', function($rootScope) {
            return {
                link: function(scope, element) {

                    var listener = function(event, toState, toParams, fromState, fromParams) {
                        var title = 'Shane Howell';
                        if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;
                        element.text(title);
                    };

                    $rootScope.$on('$stateChangeStart', listener);
                }
            };
        }]);

})();
