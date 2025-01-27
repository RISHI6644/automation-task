class SignUpDetailsPage {
    constructor(page) {
      this.page = page;
  
      // Account Information Section
      this.titleMrRadioBtn = page.locator("input[id='id_gender1']");
      this.titleMrsRadioBtn = page.locator("input[id='id_gender2']");
      this.nameField = page.locator("input[data-qa='name']");
      this.emailField = page.locator("input[data-qa='email']");
      this.passwordField = page.locator("input[data-qa='password']");
      this.dayDropdown = page.locator("select[data-qa='days']");
      this.monthDropdown = page.locator("select[data-qa='months']");
      this.yearDropdown = page.locator("select[data-qa='years']");
      this.newsletterCheckbox = page.locator("input[id='newsletter']");
      this.specialOffersCheckbox = page.locator("input[id='optin']");
  
      // Address Information Section
      this.firstNameField = page.locator("input[data-qa='first_name']");
      this.lastNameField = page.locator("input[data-qa='last_name']");
      this.companyField = page.locator("input[data-qa='company']");
      this.addressField = page.locator("input[data-qa='address']");
      this.address2Field = page.locator("input[data-qa='address2']");
      this.countryDropdown = page.locator("select[data-qa='country']");
      this.stateField = page.locator("input[data-qa='state']");
      this.cityField = page.locator("input[data-qa='city']");
      this.zipCodeField = page.locator("input[data-qa='zipcode']");
      this.mobileNumberField = page.locator("input[data-qa='mobile_number']");
      this.createAccountButton = page.locator("button[data-qa='create-account']");

      // Account creation success message
      this.successMessage = page.locator("h2[data-qa='account-created']");

      this.continueButton = page.locator("[data-qa='continue-button']");
    }
  
    // Methods to interact with the form
    async fillAccountInformation(title, password, dob) {
      // Select title
      if (title === "Mr") {
        await this.titleMrRadioBtn.check();
      } else if (title === "Mrs") {
        await this.titleMrsRadioBtn.check();
      }
  
      // Fill password
      await this.passwordField.fill(password);
  
      // Select date of birth
      await this.dayDropdown.selectOption(dob.day);
      await this.monthDropdown.selectOption(dob.month);
      await this.yearDropdown.selectOption(dob.year);
    }

    // Check newsletter and special offers checkboxes
    async checkNewsLetterCheckbox () {
        await this.newsletterCheckbox.check();
      }

    async checkSpecialOffersCheckbox () {
        await this.specialOffersCheckbox.check();
      }
  
    async fillAddressInformation(address) {
      await this.firstNameField.fill(address.firstName);
      await this.lastNameField.fill(address.lastName);
      await this.companyField.fill(address.company);
      await this.addressField.fill(address.address1);
      await this.address2Field.fill(address.address2);
      await this.countryDropdown.selectOption(address.country);
      await this.stateField.fill(address.state);
      await this.cityField.fill(address.city);
      await this.zipCodeField.fill(address.zipCode);
      await this.mobileNumberField.fill(address.mobileNumber);
    }
  
    async clickCreateAccount() {
      await this.createAccountButton.click();
    }

    // Method to verify the success message
    async verifyAccountCreationSuccessMesssage() {
        await this.successMessage.waitFor({ state: "visible" }); // Wait until the success message is visible
        const isMessageVisible = await this.successMessage.isVisible();
        if (!isMessageVisible) {
        throw new Error("Account creation success message is not visible!");
        }
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }
  }
  
  export { SignUpDetailsPage };