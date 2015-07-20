(function() {

    // Call the module from app.
    angular.module('sh')

        // UI Router
        .config(['$stateProvider', function ($stateProvider) {

            // Default Page Title
            var defaultTitle = " // Shane Howell";

            // Nav States
            $stateProvider

                // Home Page
                .state('root.home', {
                    url: '/',
                    data: {
                        pageTitle: 'Home' + defaultTitle
                    },
                    views: {
                        'pages@': {
                            templateUrl: 'Pages/Home/views/Home.index.html'
                        },
                    }
                });

        }]);

})();
