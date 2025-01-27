import { test } from '@playwright/test';
import { SignUpPage } from '../pages/signup.page';
import { SignUpDetailsPage } from '../pages/signupdetails.page';
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';
import { generateRandomEmail } from '../utils/stringUtils';


test.describe('UI Testing', () => {
  test('Complete signup, add product to cart, and checkout', async ({ page }) => {
    const signupPage = new SignUpPage(page);
    const signupDetailsPage = new SignUpDetailsPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Step : Visit Login Page and sign up
    await signupPage.visit();

    const email = generateRandomEmail();

    await signupPage.fillPrimarySignUpForm("Test User", email);
    await signupPage.clickSignUpButton();

    // Step : Fill signup details form
    await signupDetailsPage.fillAccountInformation(
      "Mr", "password123", { day: "1", month: "January", year: "2000" }); 

    await signupDetailsPage.checkNewsLetterCheckbox();
    await signupDetailsPage.checkSpecialOffersCheckbox();

    await signupDetailsPage.fillAddressInformation(
        {"firstName": "Test", 
            "lastName": "User", 
            "company": "Test Company", 
            "address1": "123 Test St", 
            "address2": "Apt 1", "country": 
            "United States", 
            "state": "California", 
            "city": "Los Angeles", 
            "zipCode": "90001", 
            "mobileNumber": "1234567890"});
            
    await signupDetailsPage.clickCreateAccount();
    await signupDetailsPage.verifyAccountCreationSuccessMesssage();
    await signupDetailsPage.clickContinueButton();

    // Step : Select product category and update cart
    await productPage.expandMenCategory();
    await productPage.selectJeansCategory();

    // Step: View and update product
    await productPage.viewAndUpdateProduct(2);

    // Step : Proceed to checkout and confirm order
    await productPage.clickViewCartLink();
    await cartPage.proceedToCheckout();
    await cartPage.clickPlaceOrderButton();

    await cartPage.fillPaymentInformation({
      nameOnCard: "Test User",
      cardNumber: "4111111111111111",
      cvc: "123",
      expiryMonth: "12",
      expiryYear: "2025",
    });

    await cartPage.clickPayAndConfirmOrderButton();
  });
});