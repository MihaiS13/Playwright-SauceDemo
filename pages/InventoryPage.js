import { BasePage } from "./BasePage.js";

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);

    this.titleHeader = this.page.locator('[data-test="title"]');
    this.cartButton = this.page.locator('[data-test="shopping-cart-link"]');
  }
  async getTitleText() {
    return await this.titleHeader.textContent();
  }
  async isCartVisible() {
    return await this.cartButton.isVisible();
  }
  async clickCartButton() {
    await this.cartButton.click();
  }
}
