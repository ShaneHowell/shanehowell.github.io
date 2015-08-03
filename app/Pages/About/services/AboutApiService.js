(function() {

    // Call the module from app.
    angular.module('sh')

        .factory("AboutApiService", ['ApiService', function(ApiService) {

            var Service = {

                getAbout: function() {
                    return ApiService.makeRequest({
                        method: 'GET',
                        url: 'Data/about.json',
                    });
                },

            };

            return Service;

        }]);

})();
