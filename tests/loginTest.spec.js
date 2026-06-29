import { test } from "./fixtures.js";
import { expect } from "@playwright/test";
import loginData from "../testData/loginData.json";

test("should login successfully with valid credentials", async ({
  page,
  loginPage,
  inventoryPage,
}) => {
  await loginPage.login(loginData.validUser, loginData.validPassword);

  await expect(inventoryPage.titleHeader).toHaveText("Products");

  await expect(inventoryPage.cartButton).toBeVisible();

  await expect(page).toHaveURL("/inventory.html");
});

test("should show error message for invalid credentials", async ({
  page,
  loginPage,
}) => {
  await loginPage.login(loginData.invalidUser, loginData.invalidPassword);

  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );

  await expect(loginPage.loginButton).toBeVisible();
});

test("should show error message for locked user", async ({
  page,
  loginPage,
}) => {
  await loginPage.login(loginData.lockedUser, loginData.validPassword);

  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Sorry, this user has been locked out.",
  );

  await expect(loginPage.loginButton).toBeVisible();
});
