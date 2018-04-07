import angular from 'angular';
import 'angular-ui-router';
import 'ne-swapi';

// angular route for state control
import {routesConfig, init} from './routes';

// landing page components
import {main} from './app/components/main';

//services
import SwapiService from './app/services/swapi-service';

//components
import {filmCard} from './app/components/filmCard/film-card';
import {spinner} from "./app/components/spinner/spinner";

// stylesheet
import './index.scss';

angular
  .module('app', ['ui.router', 'ne.swapi'])
  .config(routesConfig)
  .run(init)
  .component('app', main)
  .component('filmCard', filmCard)
  .component('spinner', spinner)
  .service('SwapiService', SwapiService);
