import { Locator, Page } from "@playwright/test";

/**
 * Represents the cart page's available elements and interactions.
 */
export default class CartPage {
  private page: Page;
  private cartList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartList = this.page.locator('[data-test="cart_list"]');
  }

  /**
   * Retrieves the cart list element.
   * @returns The cart list element locator.
   */
  async getCartList(): Promise<Locator> {
    return this.cartList;
  }
}
