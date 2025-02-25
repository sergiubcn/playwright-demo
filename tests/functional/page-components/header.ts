import { Locator, Page } from "@playwright/test";

/**
 * Encapsulates the header's available elements and interactions.
 * @param page The page context.
 * @returns An object with access to interactions and elements.
 */
export const header = (page: Page) => {
  const shoppingCartContainer = page.locator("#shopping_cart_container");
  const shoppingCartBadge = page.locator("[data-test=shopping-cart-badge]");

  return {
    /**
     * Retrieves the number of items in the cart as indicated by the mini shopping cart badge.
     * @returns The number indicated in the mini shopping cart badge.
     */
    getShoppingCartBadgeNumber: async (): Promise<string> =>
      await shoppingCartBadge.innerText(),
    /**
     * Retrieves the mini shopping cart element from the header.
     * @returns The header shopping cart container element.
     */
    getShoppingCartContainer: async (): Promise<Locator> =>
      shoppingCartContainer,
  };
};
