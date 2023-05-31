//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel){
        super(make, model, year, color, mileage)
        this.maximumPassengers = maximumPassengers
        this.passengers = passengers
        this.numberOfWheels = numberOfWheels
        this.maximumSpeed = maximumSpeed
        this.fuel = fuel
        this.scheduleService = false
    }
    loadPassenger(passengers){
        if(this.passengers < 5 && (this.passengers + passengers) < 5){
            this.passengers = passengers + this.passengers
            console.log(this.passengers + " passengers in the car")
        }else{
            console.log("to many people for the car")
        }
    }

    checkService(){
        if(this.mileage > 30000){
            console.log("Time for service")
            return this.scheduleService = true
        }else{
            console.log("car is fine")
        }
    }
}
let v = new Car("Mercury", "Sedan", "1965", "color", 15000, 5, 0, 4, 160, 10);

console.log(v.fuel)
v.start()
v.checkService(32000)

//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
