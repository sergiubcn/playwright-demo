import { Locator, Page } from "@playwright/test";

/**
 * Functional POM using composition.
 */

/**
 * Encapsulates the inventory page's available elements and interactions.
 * @param page The page context.
 * @returns An object with access to elements and interactions.
 */
export const inventoryPage = (page: Page) => {
  const addToCartButton = (productName: string = ""): Locator =>
    page.locator(`[data-test*=add-to-cart-${productName}]`);
  const removeFromCartButton = (productName: string = ""): Locator =>
    page.locator(`[data-test*=remove-${productName}]`);

  return {
    /**
     * Loads the Inventory page.
     */
    load: async (): Promise<void> => {
      await page.goto("/inventory.html");
    },
    /**
     * Adds a product to the cart.
     * @param productName The product's name in snake-case.
     */
    addProductToCart: async (productName: string): Promise<void> => {
      await addToCartButton(productName).click();
      await removeFromCartButton(productName).waitFor();
    },
  };
};
