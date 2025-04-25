import { expect, test } from "@playwright/test";

import { header } from "../page-components/header";
import { loginPage } from "../page-components/login-page";
import { lockedOutUser, validUser } from "../../data/user-data";

test.describe("Authentication", () => {
  test("A user is able to login", async ({ page }) => {
    const loginPg = loginPage(page);
    await loginPg.load();
    await loginPg.login(validUser.password, validUser.username);

    const hd = header(page);
    await expect(await hd.getShoppingCartContainer()).toBeVisible();
  });

  test("A locked out user cannot log in", async ({ page }) => {
    const loginPg = loginPage(page);
    await loginPg.load();
    await loginPg.login(lockedOutUser.password, lockedOutUser.username);
    expect(await loginPg.getErrorMessage()).toBeTruthy();
  });

  // Windsurf POC
  // Test generated almost solely by Windsurf, including the page component objects.
  // It even got the correct UI element selectors.
  test("A user can logout", async ({ page }) => {
    const loginPg = loginPage(page);
    await loginPg.load();
    await loginPg.login(validUser.password, validUser.username);

    const hd = header(page);
    await hd.logout();
    await expect(await hd.getShoppingCartContainer()).toBeHidden();
  });
});
