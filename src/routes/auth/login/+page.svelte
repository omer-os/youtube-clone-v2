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
</script>

<div class="h-dvh flex items-center justify-center flex-col">
  <Card>
    <CardHeader>
      <CardTitle>Signin</CardTitle>
      <CardDescription>Signin with your account</CardDescription>
    </CardHeader>
    <CardContent class="w-[20em]">
      <form method="POST" use:enhance>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-2">
            <Label for="email">Email Address</Label>
            <Input id="email" name="email" placeholder="Enter email address" />
          </div>
          <div class="flex flex-col gap-2">
            <Label for="password">Password</Label>
            <Input
              name="password"
              id="password"
              type={passwordType}
              placeholder="Enter your password"
            />
          </div>

          <div class="mt-3 w-full flex flex-col">
            <Button type="submit">Sign in</Button>
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
