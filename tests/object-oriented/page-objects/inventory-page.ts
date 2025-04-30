import { Locator, Page } from "@playwright/test";

// Code refactored using Windsurf.
/**
 * Represents the inventory page's available elements and interactions.
 */
export default class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private addToCartButton(name: string): Locator {
    return this.page.locator(`[data-test=add-to-cart-${name}]`);
  }

  /**
   * Adds a product to the shopping cart.
   */
  async addProductToCart(name: string): Promise<void> {
    await this.addToCartButton(name).click();
  }

  /**
   * Loads the inventory page.
   */
  async loadPage(): Promise<void> {
    await this.page.goto("/inventory.html");
  }
}
