import { auth } from "$lib/auth";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import z, { ZodError } from "zod";

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z.string(),
})

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData()
    const formDataObj = Object.fromEntries(formData)

    try {
      const requestParams = signupSchema.parse(formDataObj)

      const data = await auth.api.signUpEmail({
        body: {
          name: requestParams.username,
          rememberMe: true,
          email: requestParams.email,
          password: requestParams.password,
        },
      });



    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors = error.issues.map(issue => ({
          field: issue.path[0],
          message: issue.message
        }))
        return fail(400, {
          fieldErrors,
        })
      }
    }


    redirect(302, "/auth/login")
  }

}
