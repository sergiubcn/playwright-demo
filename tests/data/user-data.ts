import { envVars } from "../../config/env-vars";

type credentials = { username: string; password: string };

export const validUser: credentials = {
  password: envVars.validUserPassword,
  username: "standard_user",
};

export const lockedOutUser: credentials = {
  password: envVars.lockedOutUserPassword,
  username: "locked_out_user",
};
