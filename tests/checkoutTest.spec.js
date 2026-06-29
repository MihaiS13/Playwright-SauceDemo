import { test } from "./fixtures.js";
import { expect } from "@playwright/test";
import checkoutData from "../testData/checkoutData.json";

test("should not proceed to checkout step two with invalid input data", async ({
  page,
  loggedInPage,
  inventoryPage,
  cartPage,
  checkoutStepOnePage,
}) => {
  await inventoryPage.clickAddToCartFirstProduct();

  await inventoryPage.clickCartButton();

  await cartPage.clickCheckoutButton();

  await checkoutStepOnePage.fillCheckoutInfo(
    checkoutData.invalidUser.firstName,
    checkoutData.invalidUser.lastName,
    checkoutData.invalidUser.postalCode,
  );

  await expect(page).toHaveURL(/checkout-step-one/);
});
