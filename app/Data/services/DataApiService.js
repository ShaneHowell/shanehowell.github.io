(function() {

    // Call the module from app.
    angular.module('sh')

        .factory("DataApiService", ['ApiService', function(ApiService) {

            var Service = {

                getProjects: function() {
                    return ApiService.makeRequest({
                        method: 'GET',
                        url: 'Data/json/projects.json',
                    });
                },

                getAbout: function() {
                    return ApiService.makeRequest({
                        method: 'GET',
                        url: 'Data/json/about.json',
                    });
                },

            };

            return Service;

        }]);

})();
