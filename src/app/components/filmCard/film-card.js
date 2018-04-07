import './film-card.scss';
import Swal from 'sweetalert2'

class FilmCardController {
    constructor(SwapiService, $scope){
        this.SwapiService = SwapiService;
        this._$scope = $scope;

        this.loading = false;
        this.isExpanded = false;
        this.chars = null;
    }

    loadCharactersList(){
        if(this.chars){
            this.isExpanded = true;
            return;
        }

        const characters = [];
        this.loading = true;

        for(let url of this.film.characters){
            characters.push(this.SwapiService.loadCharacters(url));
        }

        Promise.all(characters)
            .then(response => {
                this.chars = response;
                this.isExpanded = true;
            }).catch(err => {
                Swal({
                    text: "Error on Swapi API Call!",
                    type: 'warning'
                });
            }).finally(() => {
                this.loading = false;
                this._$scope.$apply();
            });
    }

    collapse(){
        this.isExpanded = false;
    }
}

export const filmCard = {
    template: require('./film-card.html'),
    controller: FilmCardController,
    bindings:{
        film: '<'
    }
};
