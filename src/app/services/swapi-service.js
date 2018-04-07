export default class SwapiService{
    constructor($http, swapi){
        this._$http = $http;
        this.swapi = swapi;
    }

    loadFilms(){
        return this.swapi.films.all();
    }

    loadCharacters(url){
        return this._$http
            .get(url);
    }
}