!function(){var sh=angular.module("sh",["ui.router","ngAnimate"]);sh.run(["$rootScope","$state","$timeout",function($rootScope){$rootScope.$on("$stateChangeSuccess",function(event,to,toParams,from){$rootScope.previousState=from.name?from.name:"root.home",$rootScope.toTop=to.data.resetScroll,(1==$rootScope.toTop||void 0==$rootScope.toTop)&&scroll(0,0)})}])}(),function(){angular.module("sh").directive("updateTitle",["$rootScope",function($rootScope){return{link:function(scope,element){var listener=function(event,toState){var title="Shane Howell";toState.data&&toState.data.pageTitle&&(title=toState.data.pageTitle),element.text(title)};$rootScope.$on("$stateChangeStart",listener)}}}])}(),function(){angular.module("sh").filter("currentyear",["$filter",function($filter){return function(){return $filter("date")(new Date,"yyyy")}}])}(),function(){angular.module("sh").config(["$stateProvider","$urlRouterProvider","$locationProvider","$logProvider",function($stateProvider,$urlRouterProvider,$locationProvider){$locationProvider.html5Mode(!0).hashPrefix("!"),$urlRouterProvider.when("","/"),$urlRouterProvider.rule(function($injector,$location){var path=$location.path(),hasTrailingSlash="/"===path[path.length-1];if(hasTrailingSlash){var newPath=path.substr(0,path.length-1);return newPath}});$stateProvider.state("root",{url:"","abstract":!0,data:{pageTitle:"Shane Howell"},resolve:{projects:function(ProjectsApiService){return ProjectsApiService.getProjects()},init:function(ProjectsService,projects){return ProjectsService.init(projects.data)}},views:{header:{templateUrl:"Pages/Header/views/Header.index.html"},footer:{templateUrl:"Pages/Footer/views/Footer.index.html"}}})}])}(),function(){angular.module("sh").factory("ApiService",["$http","$q","$log",function($http,$q,$log){var Service={makeRequest:function(config){var response=$q.defer();return $http(config).then(function(data){$log.debug({url:data.config.url,response:data}),response.resolve(data)},function(error){$log.debug({url:error.config.url,response:error}),response.reject(error)}),response.promise}};return Service}])}(),function(){angular.module("sh").config(["$stateProvider",function($stateProvider){$stateProvider.state("root.home",{url:"/",views:{"pages@":{templateUrl:"Pages/Home/views/Home.index.html"}}})}])}(),function(){angular.module("sh").controller("ProjectController",["$scope","$rootScope","$filter","$stateParams","$window","ProjectsService",function($scope,$rootScope,$filter,$stateParams,$window,ProjectsService){console.log(ProjectsService.projects)}])}(),function(){angular.module("sh").factory("ProjectsApiService",["ApiService",function(ApiService){var Service={getProjects:function(){return ApiService.makeRequest({method:"GET",url:"Data/projects.json"})}};return Service}])}(),function(){angular.module("sh").factory("ProjectsService",["$filter","ProjectsApiService",function(){var Service={projects:null,init:function(projects){Service.projects=projects}};return Service}])}();