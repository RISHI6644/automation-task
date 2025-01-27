class SignUpPage {
    constructor(page) {
      this.page = page;
      this.loginUrl = "https://automationexercise.com/login";
      this.signupNameInput = page.locator("input[data-qa='signup-name']");
      this.signupEmailInput = page.locator("input[data-qa='signup-email']");
      this.signupButton = page.locator("button[data-qa='signup-button']");
    }
  
    async visit() {
      await this.page.goto(this.loginUrl);
    }
  
    async fillPrimarySignUpForm(name, email) {
      await this.signupNameInput.fill(name);
      await this.signupEmailInput.fill(email);
    }

    async clickSignUpButton() {
      await this.signupButton.click();
    }
  }
  
  export { SignUpPage };