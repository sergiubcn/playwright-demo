import { Page } from "@playwright/test";

/**
 * Functional POM using composition.
 */

/**
 * Encapsulates the login page's available elements and interactions.
 * @param page The page context.
 * @returns An object with access to elements and interactions.
 */
export const loginPage = (page: Page) => {
  const errorMessage = page.locator("[data-test=error]");
  const loginButton = page.locator("#login-button");
  const passwordTextField = page.locator("[data-test=password]");
  const usernameTextField = page.locator("[data-test=username]");

  return {
    /**
     * Retrieves the error message if it is displayed.
     * @returns The error message string.
     */
    getErrorMessage: async (): Promise<string> => {
      return await errorMessage.innerText();
    },
    /**
     * Loads the login page and waits for the login button in order to ensure that the page is actionable.
     */
    load: async (): Promise<void> => {
      await page.goto("/");
      await loginButton.waitFor();
    },
    /**
     * Attempts to log the user into the account.
     * @param password The user account's password.
     * @param username The user account's username.
     */
    login: async (password: string, username: string): Promise<void> => {
      await usernameTextField.fill(username);
      await passwordTextField.fill(password);
      await loginButton.click();
    },
  };
};
