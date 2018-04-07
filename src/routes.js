/** @ngInject */
export function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      abstract: true,
      template: '<ui-view />'
    })
    .state('app.home', {
      url: '/',
      component: 'app'
    });
}

export function init($transitions) {

}
