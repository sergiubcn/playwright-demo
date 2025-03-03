import { Page } from "@playwright/test";

import {
  getLoginPageErrorMessage,
  loadLoginPageAndAuthenticate,
} from "../interactions/authentication-interactions";

/**
 * Provide each user type the actions from the orchestrator files which they have access to.
 * This is an "actor" according to the Screenplay design pattern.
 * Use this pattern when the application has multiple user types or roles. Example: an admin would have access to more interactions and interrogations than a customer user.
 */

/**
 * Represents the customer user account, and the interactions and interrogations they have access to.
 */
export default class Customer {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Retrieves error message shown upon a failed login.
   * @returns The error message string.
   */
  async getLoginPageErrorMessage(): Promise<string> {
    return await getLoginPageErrorMessage(this.page);
  }

  /**
   * Loads the root page and attempts to log into the account.
   * @param password The account's password.
   * @param username The account's username.
   */
  async loadLoginPageAndAuthenticate(
    password: string,
    username: string,
  ): Promise<void> {
    await loadLoginPageAndAuthenticate(password, username, this.page);
  }
}
