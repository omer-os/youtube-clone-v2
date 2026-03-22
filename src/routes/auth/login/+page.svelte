<script lang="ts">
  import { enhance } from "$app/forms";
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import Label from "$lib/components/ui/label/label.svelte";
  import Input from "$lib/components/ui/input/input.svelte";

  let passwordType: "password" | "text" = $state("password");
  let loading = $state(false);
  const { form } = $props();

  function togglePassword() {
    passwordType = passwordType === "password" ? "text" : "password";
  }
</script>

<div class="h-dvh flex items-center justify-center flex-col">
  <Card>
    <CardHeader>
      <CardTitle>Signin</CardTitle>
      <CardDescription>Signin with your account</CardDescription>
    </CardHeader>
    <CardContent class="w-[20em]">
      <form
        method="POST"
        use:enhance={() => {
          loading = true;
          return async ({ update }) => {
            loading = false;
            await update();
          };
        }}
      >
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-2">
            <Label for="email">Email Address</Label>
            <Input id="email" name="email" placeholder="Enter email address" />
            <!-- {#if fieldError("email")} -->
            <!--   <p class="text-sm text-destructive">{fieldError("email")}</p> -->
            <!-- {/if} -->
          </div>
          <div class="flex flex-col gap-2">
            <Label for="password">Password</Label>
            <div class="relative">
              <Input
                name="password"
                id="password"
                type={passwordType}
                placeholder="Enter your password"
              />
              <button
                type="button"
                class="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground"
                onclick={togglePassword}
              >
                {passwordType === "password" ? "Show" : "Hide"}
              </button>
            </div>
            <!-- {#if f} -->
            <!--   <p class="text-sm text-destructive">{fieldError("password")}</p> -->
            <!-- {/if} -->
          </div>
          <div class="mt-3 w-full flex flex-col">
            {#if form?.error}
              <p class="text-center text-destructive mb-1 underline">
                {form.error}
              </p>
            {/if}
            <Button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>

            <a
              class="underline text-muted-foreground text-center mt-1"
              href="/auth/signup">Signup Instead</a
            >
          </div>
        </div>
      </form>
    </CardContent>
  </Card>
</div>
