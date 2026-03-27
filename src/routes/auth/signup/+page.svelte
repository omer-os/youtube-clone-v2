<script lang="ts">
  import { Eye, EyeOff } from "@lucide/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
  } from "$lib/components/ui/input-group";
  import Label from "$lib/components/ui/label/label.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import { signUp } from "$lib/auth-client";
  import { goto } from "$app/navigation";

  let passwordType: "password" | "text" = $state("password");
  let loading = $state(false);

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    loading = true;
    const { error } = await signUp.email({
      email: data.get("email") as string,
      password: data.get("password") as string,
      name: data.get("username") as string,
    });
    loading = false;

    if (error) {
      console.error(error);
      return;
    }

    goto("/");
  }
</script>

<div class="h-dvh flex items-center justify-center flex-col">
  <Card>
    <CardHeader>
      <CardTitle>Signup</CardTitle>
      <CardDescription>Create New Youtube Account</CardDescription>
    </CardHeader>
    <CardContent class="w-[20em]">
      <form onsubmit={handleSubmit}>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-2">
            <Label for="username">Username</Label>
            <Input
              id="username"
              name="username"
              required
              placeholder="Enter username"
            />
          </div>
          <div class="flex flex-col gap-2">
            <Label for="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter email address"
            />
          </div>
          <div class="flex flex-col gap-2">
            <Label for="password">Password</Label>
            <InputGroup>
              <InputGroupInput
                name="password"
                id="password"
                type={passwordType}
                required
                placeholder="Enter your password"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  onclick={() =>
                    passwordType === "password"
                      ? (passwordType = "text")
                      : (passwordType = "password")}
                >
                  {#if passwordType === "password"}<Eye />{:else}<EyeOff />{/if}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div class="mt-3 w-full flex flex-col">
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </Button>
            <a
              class="underline text-muted-foreground text-center mt-1"
              href="/auth/login">Login Instead</a
            >
          </div>
        </div>
      </form>
    </CardContent>
  </Card>
</div>
