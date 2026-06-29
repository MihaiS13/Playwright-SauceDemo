import { BasePage } from "./BasePage.js";

export class CheckoutCompletePage extends BasePage {
  constructor(page) {
    super(page);

    this.completeHeader = this.page.locator(".complete-header");
    this.completeText = this.page.locator(".complete-text");
    this.backHomeButton = this.page.locator('[data-test="back-to-products"]');
  }

  async getSuccessMessage() {
    return await this.completeHeader.textContent();
  }

  async isSuccessMessageVisible() {
    return await this.completeHeader.isVisible();
  }

  async clickBackHome() {
    await this.backHomeButton.click();
  }
}
