enum PaymentType {
    Paypal = "PAYPAL",
    Bitcoin = "BITCOIN",
    VisaCard = "VISA_CARD",
}
  
abstract class PaymentService {
  public abstract payMoney(amount: number): void;
}
  
class Paypal extends PaymentService {
  public payMoney(amount: number) {
    console.log(`You paid ${amount} dollars by Paypal.`);
  }
}
  
class Bitcoin extends PaymentService {
  public payMoney(amount: number) {
    console.log(`You paid ${amount} dollars by Bitcoin.`);
  }
}
  
class VisaCard extends PaymentService {
  public payMoney(amount: number) {
    console.log(`You paid ${amount} dollars by VisaCard.`);
  }
}

class Factory {
  constructor( private type: PaymentType ) {};
  public createPaymentService(): PaymentService {
    switch (this.type) {
      case PaymentType.Paypal:
        return new Paypal();
      case PaymentType.Bitcoin:
        return new Bitcoin();
      case PaymentType.VisaCard:
        return new VisaCard();
      default:
        throw new Error("Invalid payment type.");
    }
  };
};