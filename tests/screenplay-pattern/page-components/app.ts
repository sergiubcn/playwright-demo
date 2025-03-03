import { Page } from "@playwright/test";

export const loadPage = async (
  path: string = "/",
  page: Page,
): Promise<void> => {
  await page.goto(path);
};
