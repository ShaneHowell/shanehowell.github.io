(function() {

    // Call the module from app.
    angular.module('sh')

        .factory("ProjectsApiService", ['ApiService', function(ApiService) {

            var Service = {

                getProjects: function() {
                    return ApiService.makeRequest({
                        method: 'GET',
                        url: 'Data/projects.json',
                    });
                },

            };

            return Service;

        }]);

})();
