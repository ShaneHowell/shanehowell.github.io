(function() {

    // Call the module from app.
    angular.module('sh')

        .factory("ProjectsService", ['ProjectsApiService', function(ProjectsApiService) {

            var Service = {

                projects: null,

                init: function(projects) {
                    Service.projects = projects;
                },

            };

            return Service;

        }]);

})();
