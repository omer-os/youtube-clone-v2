import { auth } from "$lib/auth";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import z, { ZodError } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const formDataObj = Object.fromEntries(formData);

    try {
      const requestParams = loginSchema.parse(formDataObj);
      const data = await auth.api.signInEmail({
        body: {
          email: requestParams.email,
          password: requestParams.password,
          rememberMe: true
        },
        headers: request.headers,
        asResponse: true
      });

    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors = error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        }));
        return fail(400, { fieldErrors });
      }
      return fail(400, { error: "Invalid email or password." });
    }

    // redirect(302, "/");
  },
};
