import { BasePage } from "./BasePage.js";

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);

    this.titleHeader = this.page.locator('[data-test="title"]');
    this.cartButton = this.page.locator('[data-test="shopping-cart-link"]');
    this.products = this.page.locator(".inventory_item_name");
    this.prices = this.page.locator(".inventory_item_price");
    this.addToCartButton = this.page.locator(".btn_primary");
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

  async clickAddToCartFirstProduct() {
    await this.page.locator("button[id^='add-to-cart']").first().click();
  }

  async getFirstProduct() {
    const name = await this.page
      .locator(".inventory_item_name")
      .first()
      .textContent();
    const price = await this.page
      .locator(".inventory_item_price")
      .first()
      .textContent();

    return { name, price };
  }
}
