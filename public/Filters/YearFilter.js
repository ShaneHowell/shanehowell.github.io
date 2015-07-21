(function() {

    // Call the module from app.
    angular.module('sh')

        .filter('currentyear', ['$filter', function($filter) {

            return function() {
                return $filter('date')(new Date(), 'yyyy');
            };

        }]);

})();
