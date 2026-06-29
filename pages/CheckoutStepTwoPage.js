import { BasePage } from "./BasePage.js";

export class CheckoutStepTwoPage {
  constructor(page) {
    this.page = page;

    this.finishButton = page.locator('[data-test="finish"]');
    this.productNames = page.locator(".inventory_item_name");
    this.productPrices = page.locator(".inventory_item_price");
  }
  async getProductName() {
    return await this.productNames.textContent();
  }
  async getProductPrice() {
    return await this.productPrices.textContent();
  }
  async clickFinish() {
    await this.finishButton.click();
  }
}
