(function() {

    // Call the module from app.
    angular.module('sh')

        .filter('sanitize', ['$sce', function($sce){

            return function(val) {
                return $sce.trustAsHtml(val);
            };

        }]);

})();
