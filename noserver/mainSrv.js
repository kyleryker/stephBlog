angular.module('starFinder').service('mainSrv', function ($http){

  this.getCharacter = (charName) => {
    return $http.get(`http://swapi.co/api/people/?search=${charName}`)
  }

  this.getPlanet = (planetName) => {
    return $http.get(`http://swapi.co/api/planets/?search=${planetName}`)
  }

  this.getStarship = (shipName, shipModel) =>{
  if (shipName){
    return $http.get(`http://swapi.co/api/starships/?search=${shipName}`)}
    else if (shipModel){
      return $http.get(`http://swapi.co/api/starships/?search=${shipModel}`)
    }
  }

  this.getVehicle = (vehicleName, vehicleModel) =>{
    if (vehicleName){
      return $http.get(`http://swapi.co/api/vehicles/?search=${vehicleName}`)
    }
    else if (vehicleModel){
      return $http.get(`http://swapi.co/api/vehicles/?search=${vehicleModel}`)
    }
  }

  this.getFilm = (filmTitle) =>{
    return $http.get(`http://swapi.co/api/films/?search=${filmTitle}`)
  }

  this.getSpecies = (speciesName) =>{
    return $http.get(`http://swapi.co/api/species/?search=${speciesName}`)
  }



})
