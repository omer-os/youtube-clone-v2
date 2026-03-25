<script lang="ts">
  import { authClient } from "$lib/auth-client";
  import { goto } from "$app/navigation";
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
  let error = $state("");
  let email = $state("");
  let password = $state("");

  function togglePassword() {
    passwordType = passwordType === "password" ? "text" : "password";
  }

  async function handleSignin(e: Event) {
    e.preventDefault();
    loading = true;
    error = "";
    const { error: authError } = await authClient.signIn.email({
      email,
      password,
    });
    loading = false;
    if (authError) {
      error = authError.message ?? "Something went wrong";
    } else {
      goto("/");
    }
  }
</script>

<div class="h-dvh flex items-center justify-center flex-col">
  <Card>
    <CardHeader>
      <CardTitle>Signin</CardTitle>
      <CardDescription>Signin with your account</CardDescription>
    </CardHeader>
    <CardContent class="w-[20em]">
      <form onsubmit={handleSignin}>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-2">
            <Label for="email">Email Address</Label>
            <Input
              id="email"
              bind:value={email}
              placeholder="Enter email address"
            />
          </div>
          <div class="flex flex-col gap-2">
            <Label for="password">Password</Label>
            <div class="relative">
              <Input
                id="password"
                type={passwordType}
                bind:value={password}
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
          </div>
          <div class="mt-3 w-full flex flex-col">
            {#if error}
              <p class="text-center text-destructive mb-1 underline">{error}</p>
            {/if}
            <Button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
            <a
              class="underline text-muted-foreground text-center mt-1"
              href="/auth/signup"
            >
              Signup Instead
            </a>
          </div>
        </div>
      </form>
    </CardContent>
  </Card>
</div>
