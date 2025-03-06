import { defineBackend } from "@aws-amplify/backend";
import { data } from "./data/resource";
import { auth } from "./auth/resource";
import { sayHello } from "./functions/say-hello/resource";

export const backend = defineBackend({
  data,
  auth,
  sayHello,
});
