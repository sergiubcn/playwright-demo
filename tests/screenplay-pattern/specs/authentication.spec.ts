import { expect, test } from "@playwright/test";

import Customer from "../users/Customer";
import { lockedOutUser } from "../../data/user-data";

test.describe("Authentication", () => {
  test("A locked out user cannot log in", async ({ page }) => {
    const customer = new Customer(page);
    await customer.loadLoginPageAndAuthenticate(
      lockedOutUser.password,
      lockedOutUser.username,
    );
    expect(await customer.getLoginPageErrorMessage()).toBeTruthy();
  });
});
