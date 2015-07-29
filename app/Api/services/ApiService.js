(function() {

    // Call the module from app.
    angular.module('sh')

        .factory("ApiService", ['$http', '$q', '$log', function($http, $q, $log) {

            var Service = {

                makeRequest: function(config) {
                    var response = $q.defer();

                    $http(config).then(function(data) {

                        $log.debug({
                            url: data.config.url,
                            response: data
                        });
                        response.resolve(data);

                    }, function(error) {

                        $log.debug({
                            url: error.config.url,
                            response: error
                        });

                        response.reject(error);

                    });

                    return response.promise;
                }

            };

            return Service;

        }]);

})();
