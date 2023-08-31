// Class Customer - Inherits from User
import { User } from "./user.js";
export class Customer extends User {
  constructor(id, name, email, phoneNumber, loyaltyPoints) {
    super(id, name, email, phoneNumber);
    this.loyaltyPoints = loyaltyPoints;
  }

  redeemLoyaltyPoints = (points) => {
    this.loyaltyPoints += points;
  };
}
