import { expect, test } from "@playwright/test";

import LoginPage from "../page-objects/login-page";
import { lockedOutUser } from "../../data/user-data";

test.describe("Authentication", () => {
  test("A locked out user cannot log in", async ({ page }) => {
    const loginPg = new LoginPage(page);
    await loginPg.load();
    await loginPg.login(lockedOutUser.password, lockedOutUser.username);
    expect(await loginPg.getErrorMessage()).toBeTruthy();
  });
});
