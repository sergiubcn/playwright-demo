import { Locator, Page } from "@playwright/test";

// Code refactored using Windsurf.
/**
 * Represents the header component's available elements and interactions.
 */
export default class Header {
  private page: Page;
  private shoppingCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartButton = this.page.locator(
      '[data-test="shopping-cart-link"]',
    );
  }

  /**
   * Navigates to the shopping cart page.
   */
  async navigateToCartPage(): Promise<void> {
    await this.shoppingCartButton.click();
  }
}
