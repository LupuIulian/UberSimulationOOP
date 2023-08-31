// Class Driver - Inherits from User
import { User } from "./user.js";
import { pastRides } from "./index.js";
export class Driver extends User {
  constructor(id, name, email, phoneNumber, vehicle, licensePlate) {
    super(id, name, email, phoneNumber);
    this.vehicle = vehicle;
    this.licensePlate = licensePlate;
    this.wallet = 0;
  }

  updateProfile = (newName) => {
    this.name = newName;
  };

  acceptRideRequest = (ride) => {
    ride.driver === this.name;
    console.log(
      `Ride with the id ${ride.id}, was accepted by driver ${this.name}.`
    );
  };

  cancelRideRequest = (ride) => {
    ride.driver === undefined;
    console.log(
      `Ride with the id ${ride.id}, was decline by driver ${this.name}.`
    );
  };

  completeRide = (ride) => {
    console.log(`${this.name} completed the ride with id ${ride.id}`);
    pastRides.push(ride);
    this.wallet += ride.fare;
  };

  viewEarnings = () => {
    console.log(
      `This ${this.wallet}$ is the total amount of driver ${this.name}`
    );
  };
}
