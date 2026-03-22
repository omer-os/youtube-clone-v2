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
  import { enhance } from "$app/forms";
  import Input from "$lib/components/ui/input/input.svelte";

  let passwordType: "password" | "text" = $state("password");
</script>

<div class="h-dvh flex items-center justify-center flex-col">
  <Card>
    <CardHeader>
      <CardTitle>Signup</CardTitle>
      <CardDescription>Create New Youtube Account</CardDescription>
    </CardHeader>
    <CardContent class="w-[20em]">
      <form method="POST" use:enhance>
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
                  {#if passwordType === "password"}
                    <Eye />
                  {:else}
                    <EyeOff />
                  {/if}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div class="mt-3 w-full flex flex-col">
            <Button type="submit">Create Account</Button>
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
