export class PaymentMethod {
  constructor(id, type, lastFourDigits) {
    this.id = id;
    this.type = type;
    this.lastFourDigits = lastFourDigits;
  }
}
