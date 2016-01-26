// movies = angular.module('movies', ['movies.controller', 'movieResources']);

movie = angular.module('movie', [
  'movieResources',
  'movie.controller',
  'ngResource'
]);