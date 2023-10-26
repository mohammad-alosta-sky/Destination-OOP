const Airport = require("./Airport");

class Plane {
    constructor(company, origin, destination, passengers){
        this.company = company;
        this.origin = Airport.airportCode;
        this.destination = destination;
        this.passengers = [];
    }
    getPassengers(){
        return this.passengers;
    }
    addPassengers(passenger){
        this.passengers.push(passenger);
    }



}


module.exports = Plane;