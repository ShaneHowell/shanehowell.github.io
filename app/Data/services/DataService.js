(function() {

    // Call the module from app.
    angular.module('sh')

        .factory("DataService", ['DataApiService', function(DataApiService) {

            var Service = {

                projects: null,
                about: null,

                init: function(projects, about) {
                    Service.projects = projects;
                    Service.about = about;
                },

                getProjectTitle: function(projects) {
                    var index = Service.projects.indexOf(projects);

                    return Service.projects[index].title;
                },

                getPrevProject: function(projects) {
                    var index = Service.projects.indexOf(projects);

                    if (index > 0) {
                        return Service.projects[index - 1].slug;
                    }

                    return null;
                },

                getNextProject: function(projects) {
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
