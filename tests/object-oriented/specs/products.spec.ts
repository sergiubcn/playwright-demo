import { test, expect, BrowserContext } from "@playwright/test";

import CartPage from "../page-objects/cart-page";
import Header from "../page-objects/header";
import InventoryPage from "../page-objects/inventory-page";
import { envVars } from "../../../config/env-vars";
import { productData } from "../../data/product-data";
import { validUser } from "../../data/user-data";

// Test generated using Playwright Codegen recorder.
// Code refactored using Windsurf.
test.describe("Inventory", () => {
  let bCtx: BrowserContext;

  test.beforeAll(async ({ browser }) => {
    bCtx = await browser.newContext();
    await bCtx.addCookies([
      {
        url: envVars.baseUrl,
        name: "session-username",
        value: validUser.username,
      },
    ]);
  });

  test("A user is able to add a product to cart", async () => {
    const pg = await bCtx.newPage();
    const inventoryPage = new InventoryPage(pg);
    await inventoryPage.loadPage();
    await inventoryPage.addProductToCart(productData.backpackProductName);

    const hd = new Header(pg);
    await hd.navigateToCartPage();

    const cartPg = new CartPage(pg);
    expect((await cartPg.getCartList()).getByText("Backpack")).toBeVisible();
  });
});
