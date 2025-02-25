import { BrowserContext, expect, test } from "@playwright/test";

import { envVars } from "../../../config/env-vars";
import { header } from "../page-components/header";
import { inventoryPage } from "../page-components/inventory-page";
import { productData } from "../../data/product-data";
import { validUser } from "../../data/user-data";

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
    const inventory = inventoryPage(pg);
    await inventory.load();
    await inventory.addProductToCart(productData.backpackProductName);

    const hd = header(pg);
    expect(await hd.getShoppingCartBadgeNumber()).toBe("1");
  });
});
