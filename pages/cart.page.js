class CartPage {
    constructor(page) {
      this.page = page;
      this.proceedToCheckoutButton = page.locator("class('btn btn-default check_out')");
      this.placeOrderButton = page.locator("a:has-text('Place Order')");
      this.nameOnCardField = page.locator("input[data-qa='name-on-card']");
      this.cardNumberField = page.locator("input[data-qa='card-number']");
      this.cvcField = page.locator("input[data-qa='cvc']");
      this.expiryMonthField = page.locator("input[data-qa='expiry-month']");
      this.expiryYearField = page.locator("input[data-qa='expiry-year']");
      this.payAndConfirmOrderButton = page.locator("button[data-qa='pay-button']");
    }
  
    async proceedToCheckout() {
      await this.proceedToCheckoutButton.click();
    }

    async clickPlaceOrderButton() {
        await this.placeOrderButton.click();
      }

    async fillPaymentInformation(cardInfo) {
        await this.nameOnCardField.fill(cardInfo.nameOnCard);
        await this.cardNumberField.fill(cardInfo.cardNumber);
        await this.cvcField.fill(cardInfo.cvc);
        await this.expiryMonthField.fill(cardInfo.expiryMonth);
        await this.expiryYearField.fill(cardInfo.expiryYear);
      }

    async clickPayAndConfirmOrderButton() {
        await this.payAndConfirmOrderButton.click();
      }
  }
  
  export { CartPage };