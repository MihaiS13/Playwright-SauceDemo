import { BasePage } from "./BasePage.js";

export class CartPage extends BasePage {
  constructor(page) {
    super(page);

    this.cartHeader = this.page.locator("text=Your Cart");
    this.productNames = this.page.locator(".inventory_item_name");
    this.productPrices = this.page.locator(".inventory_item_price");
    this.removeButton = this.page.locator('[data-test^="remove"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }
  async isProductInCart(productName) {
    return await this.page
      .locator(".inventory_item_name")
      .filter({ hasText: productName })
      .isVisible();
  }
  async isProductInCart(product) {
    const nameVisible = await this.page
      .locator(".inventory_item_name")
      .filter({ hasText: product.name })
      .isVisible();

    const priceVisible = await this.page
      .locator(".inventory_item_price")
      .filter({ hasText: product.price })
      .isVisible();

    return nameVisible && priceVisible;
  }
  async removeProductFromCart() {
    await this.removeButton.click();
  }
  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }
}
