import { Page } from "@playwright/test";

import { selectors } from "../../types";

/**
 * Functional POM definitions.
 */

const loginPageSelectors: selectors = {
  errorMessage: "[data-test=error]",
  loginButton: "#login-button",
  passwordTextField: "[data-test=password]",
  usernameTextField: "[data-test=username]",
};

export const login = async (
  password: string,
  username: string,
  page: Page,
): Promise<void> => {
  await page.fill(loginPageSelectors.usernameTextField, username);
  await page.fill(loginPageSelectors.passwordTextField, password);
  await page.click(loginPageSelectors.loginButton);
};

export const getErrorMessage = async (page: Page): Promise<string> => {
  return await page.locator(loginPageSelectors.errorMessage).innerText();
};
