/**
 * Favor centralising environment variables in a JS/ TS file so as not to repeat code, pollute the PW config
 * and the possibility to add logic as well.
 */
export const envVars: Record<string, string> = {
  baseUrl: process.env.BASE_URL as string,
  lockedOutUserPassword: process.env.LOCKED_OUT_USER_PASSWORD as string,
  validUserPassword: process.env.VALID_USER_PASSWORD as string,
};
