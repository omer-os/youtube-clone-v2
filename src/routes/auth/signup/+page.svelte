<script lang="ts">
  import { authClient } from "$lib/auth-client";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<Button
  onclick={async () => {
    const res = await authClient.signUp.email({
      email: "test@gmail.com",
      password: "12341234",
      name: "omar chatin",
      callbackURL: "http://localhost:5173/",
    });

    console.log(res.data?.user);
  }}>create account</Button
>
