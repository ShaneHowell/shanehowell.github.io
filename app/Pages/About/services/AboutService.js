(function() {

    // Call the module from app.
    angular.module('sh')

        .factory("AboutService", ['AboutApiService', function(AboutApiService) {

            var Service = {

                about: null,

                init: function(about) {
                    Service.about = about;
                },

            };

            return Service;

        }]);

})();
