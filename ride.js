export class Ride {
  constructor(id, user, driver, pickupLocation, destination) {
    this.id = id;
    this.user = user;
    this.driver = driver;
    this.pickupLocation = pickupLocation;
    this.destination = destination;
    this.fare = 0;
    this.ratingOf = [];
  }

  requestRide = (pickupLocation, destination, user) => {
    console.log(
      `User ${user.name} requested a ride from ${pickupLocation} to ${destination}`
    );
  };

  calculateFare = (distance, charge) => {
    return (this.fare = distance * charge);
  };

  cancelRide = (ride) => {
    console.log(`Driver ${this.name} cancelled the ride`);
    ride.driver = undefined;
  };

  rateDriver = (rating, review) => {
    this.ratingOf = [...this.ratingOf, [rating, review]];
    console.log(this.ratingOf);
  };
}
