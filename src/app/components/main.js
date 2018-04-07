import Swal from 'sweetalert2'

class MainController {
  constructor(SwapiService){
    this.SwapiService = SwapiService;

    this.films = null;
    this.loading = false;
  }

  $onInit(){
    this.loading = true;

    this.SwapiService.loadFilms()
        .then(({results}) => {
            this.films = results;
      }).catch(err => {
          Swal({
              text: "Error on Swapi API Call!",
              type: 'warning'
          });
      }).finally(() => this.loading = false);
  }
}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
