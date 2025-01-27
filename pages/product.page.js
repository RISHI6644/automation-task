class ProductPage {
    constructor(page) {
      this.page = page;
      this.menCategory = page.locator("a[href='#Men']");
      this.jeansCategory = page.locator('a', { hasText: 'Jeans' });
      this.viewProductButton = page.locator('a:has-text("View Product")').nth(0);
      this.productQuantityInput = page.locator("input[id='quantity']");
      this.addToCartButton = page.locator("button[class='btn btn-default cart']");
      this.viewCartLink = page.locator("a[href='/view_cart']").nth(0);
    }

    async expandMenCategory() {
          await this.menCategory.click();
      }
  
    async selectJeansCategory() {
      await this.jeansCategory.click();
    }
  
    async viewAndUpdateProduct(quantity) {
      await this.viewProductButton.click();
      await this.productQuantityInput.fill(quantity.toString());
      await this.addToCartButton.click();
    }
  
    async clickViewCartLink() {
      await this.viewCartLink.click();
    }
  }
  
  export { ProductPage };