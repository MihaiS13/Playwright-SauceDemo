import { test } from "./fixtures.js";
import { expect } from "@playwright/test";
import checkoutData from "../testData/checkoutData.json";

test("should complete full checkout flow", async ({
  page,
  loggedInPage,
  inventoryPage,
  cartPage,
  checkoutStepOnePage,
  checkoutStepTwoPage,
  checkoutCompletePage,
}) => {
  // 1. ADD PRODUCT
  const product = await inventoryPage.getFirstProduct();
  await inventoryPage.clickAddToCartFirstProduct();

  // 2. GO TO CART
  await inventoryPage.clickCartButton();

  // 3. VERIFY CART
  await expect(cartPage.productNames).toContainText(product.name);

  await expect(cartPage.productPrices).toContainText(product.price);

  // 4. CHECKOUT STEP 1
  await cartPage.clickCheckoutButton();

  await checkoutStepOnePage.fillCheckoutInfo(
    checkoutData.validUser.firstName,
    checkoutData.validUser.lastName,
    checkoutData.validUser.postalCode,
  );

  // 5. CHECKOUT STEP 2
  await expect(checkoutStepTwoPage.productNames).toContainText(product.name);

  await expect(checkoutStepTwoPage.productPrices.first()).toContainText(
    product.price,
  );

  await checkoutStepTwoPage.clickFinish();

  // 6. COMPLETE PAGE

  await expect(checkoutCompletePage.completeHeader).toHaveText(
    "Thank you for your order!",
  );
  // ✔ FINAL CHECK
  await expect(page).toHaveURL(/checkout-complete/);
});
