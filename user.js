import { registeredUsers } from "./index.js";
import { pastRides } from "./index.js";
export class User {
  constructor(id, name, email, phoneNumber) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.paymentMethods = [];
    this.pastRides = []; //for viewRideHistory
    this.isLogged = false;
  }

  register() {
    const isRegistered = registeredUsers.some(
      (user) => user.email === this.email
    );
    if (isRegistered) {
      console.log("User already registered.");
    }
    registeredUsers.push(this);
    console.log(`${this.name} has been registered successfully.`);
  }

  login = (user) => {
    if (user.isLogged === true) {
      alert(`${this.name} already logged.`);
    } else {
      console.log(`${this.name} logged in.`);
      this.isLogged = true;
    }
  };

  updateProfile(newName) {
    this.name = newName;
    console.log(`Profile name updated to ${this.name}.`);
  }

  linkPaymentMethod(paymentMethod) {
    this.paymentMethods.push(paymentMethod);
    console.log(`${this.name} has linked a new payment method.`);
  }

  viewRideHistory = (user) => {
    let thisUserRides = pastRides.filter((element) => {
      element.id === user.id;
    });
    console.log(thisUserRides);
    return thisUserRides;
  };
}
