(function() {

    // Call the module from app.
    angular.module('sh')

        .factory("ProjectsService", ['ProjectsApiService', function(ProjectsApiService) {

            var Service = {

                projects: null,

                init: function(projects) {
                    Service.projects = projects;
                },

                getTitle: function(projects) {
                    var index = Service.projects.indexOf(projects);

                    return Service.projects[index].title;
                },

                getPrev: function(projects) {
                    var index = Service.projects.indexOf(projects);

                    if (index > 0) {
                        return Service.projects[index - 1].slug;
                    }

                    return null;
                },

                getNext: function(projects) {
                    var index = Service.projects.indexOf(projects);

                    if (index < Service.projects.length - 1) {
                        return Service.projects[index + 1].slug;
                    }

                    return null;
                },

            };

            return Service;

        }]);

})();
