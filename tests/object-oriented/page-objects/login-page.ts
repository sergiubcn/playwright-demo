import { Locator, Page } from "@playwright/test";

/**
 * Object-oriented POM using composition.
 */

/**
 * Represents the login page's available elements and interactions.
 */
export default class LoginPage {
  private page: Page;
  private errorMessage: Locator;
  private loginButton: Locator;
  private passwordTextField: Locator;
  private usernameTextField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorMessage = page.locator("[data-test=error]");
    this.loginButton = page.locator("#login-button");
    this.passwordTextField = page.locator("[data-test=password]");
    this.usernameTextField = page.locator("[data-test=username]");
  }

  /**
   * Retrieves the error message if it is displayed.
   * @returns The error message string.
   */
  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.innerText();
  }

  /**
   * Loads the login page and waits for the login button in order to ensure that the page is actionable.
   */
  async load(): Promise<void> {
    await this.page.goto("/");
    await this.loginButton.waitFor();
  }

  /**
   * Attempts to log the user into the account.
   * @param password The user account's password.
   * @param username The user account's username.
   */
  async login(password: string, username: string): Promise<void> {
    await this.usernameTextField.fill(username);
    await this.passwordTextField.fill(password);
    await this.loginButton.click();
  }
}
