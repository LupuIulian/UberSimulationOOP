import { Customer } from "./customer.js";
import { Driver } from "./driver.js";
import { PaymentMethod } from "./paymentmethod.js";
import { Ride } from "./ride.js";
import { User } from "./user.js";

export let registeredUsers = [];
export let pastRides = [];

//Payment Method
const paymentMethod1 = new PaymentMethod("pm001", "Credit Card", "1234");
const paymentMethod2 = new PaymentMethod("pm002", "Cash");

const user1 = new User("001", "Iulian", "iulian@gmail.com", "123-456-7890");

//All customers
const customer1 = new Customer("002", "Maria", "maria@gmail.com", "9876543210");
customer1.linkPaymentMethod(paymentMethod1);

const customer2 = new Customer("003", "Ion", "ion@gmail.com", "0123456789");
customer2.linkPaymentMethod(paymentMethod2);

const driver1 = new Driver(
  "005",
  "Alex",
  "alex@gmail.com",
  "1234567",
  "SUV",
  "GL95BGS"
);

const clujToSuceava = new Ride("1", customer1, undefined, "Cluj", "Suceava");

// Ride
const ride1 = new Ride("001", user1.name, driver1.name, "Home", "Office", null);
ride1.fare = ride1.calculateFare(300, 10);
console.log(
  `For distance between Home and Office total fare is ${ride1.fare}$ !`
);

const ride2 = new Ride("002", user1.name, driver1.name, "Office", "Restaurant");
ride2.fare = ride2.calculateFare(50, 10);
console.log(
  `For distance between Office and Restaurant total fare is ${ride2.fare}$ !`
);
const ride3 = new Ride("003", user1.name, driver1.name, "Restaurant", "Home");
ride3.fare = ride3.calculateFare(120, 10);
console.log(
  `For distance between Restaurant and Home total fare is ${ride3.fare}$ !`
);

console.log("These are the past rides", pastRides);
ride1.requestRide(ride1.pickupLocation, ride1.destination, customer1);
driver1.acceptRideRequest(ride1);

ride1.rateDriver("5", "Best race ever!");
driver1.completeRide(ride1);
driver1.completeRide(ride3);

console.log(pastRides);

driver1.viewEarnings(ride1);

// Register Users
try {
  user1.register();
  customer1.register();
  customer2.register();
  driver1.register();
  customer1.register(); // eroare!!
} catch (error) {
  console.error(error.message);
}

console.log("All registered users:", registeredUsers);

//Login Users
user1.login(user1);
customer1.login(customer1);
customer2.login(customer2);
driver1.login(driver1);
