import { test } from "./fixtures.js";
import { expect } from "@playwright/test";

test("cart validation", async ({
  page,
  loggedInPage,
  inventoryPage,
  cartPage,
}) => {
  const product = await inventoryPage.getFirstProduct();

  await inventoryPage.clickAddToCartFirstProduct();

  await inventoryPage.clickCartButton();

  await expect(await cartPage.isProductInCart(product)).toBeTruthy();
  await cartPage.removeProductFromCart();

  await expect(await cartPage.isProductInCart(product)).toBeFalsy();
});
