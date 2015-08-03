(function() {

    // Call the module from app.
    angular.module('sh')

        // UI Router
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$logProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $logProvider) {

            // Make sure the ajax header is being sent.
            // $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

            // Sets URL to HTML5, removes hashing.
            $locationProvider.html5Mode(true).hashPrefix('!');

            // Default Route (redirects here if URL doesn't exist)
            // $urlRouterProvider.otherwise('/fourohfour');

            // Special love for the hashbang redirect.
            $urlRouterProvider.when("", "/");

            // Fix for trailing slash.
            // Redirects to non-trailing slash url.
            $urlRouterProvider.rule(function($injector, $location) {

                var path = $location.path();
                var hasTrailingSlash = path[path.length-1] === '/';

                if(hasTrailingSlash) {
                    // If the last charcter is a slash, 
                    // return the same url without the slash.
                    var newPath = path.substr(0, path.length - 1);
                    return newPath;
                }

            });

            // Default Page Title
            var defaultTitle = " // Shane Howell";

            // Nav States
            $stateProvider

                // Index Page
                .state('root', {
                    url: '',
                    abstract: true,
                    resolve: {
                        projects: function(ProjectsApiService) {
                            return ProjectsApiService.getProjects();
                        },
                        init: function(ProjectsService, projects) {
                            return ProjectsService.init(projects.data.projects);
                        }
                    },
                    views: {
                        'header': {
                            templateUrl: 'Pages/Header/views/Header.index.html'
                        },
                        'footer': {
                            templateUrl: 'Pages/Footer/views/Footer.index.html'
                        }
                    }
                })

                    // Home Page
                    .state('root.home', {
                        url: '/',
                        views: {
                            'pages@': {
                                templateUrl: 'Pages/Home/views/Home.index.html'
                            },
                        }
                    })

                        // Detail Page
                        .state('root.home.details', {
                            url: ':slug',
                            views: {
                                'pages@': {
                                    templateUrl: 'Pages/Details/views/Details.index.html'
                                },
                            }
                        });

        }]);

})();
