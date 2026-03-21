<script>
  import { Bell, Mic, Plus, Search } from "@lucide/svelte";
  import { buttonVariants } from "../ui/button";
  import { InputGroupAddon, InputGroup } from "../ui/input-group";
  import InputGroupButton from "../ui/input-group/input-group-button.svelte";
  import InputGroupInput from "../ui/input-group/input-group-input.svelte";
  import Button from "../ui/button/button.svelte";
  import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
  import { authClient } from "$lib/auth-client";

  const session = authClient.useSession();

  const Categories = [
    "All",
    "Gaming",
    "Source code",
    "APIs",
    "AI",
    "Podcasts",
    "Music",
    "Mixes",
    "Exploit",
    "Satire",
    "Live",
    "Computer Hardware",
    "Gadgets",
    "Role-Playing Games",
    "Recently uploaded",
  ];
</script>

<nav class="bg-accent/20 flex flex-col p-3 backdrop-blur-2xl">
  <div class="flex">
    <div class="flex gap-2 flex-1 items-center justify-center">
      <InputGroup class="rounded-full max-w-[30em]">
        <InputGroupInput placeholder="search for anything" />
        <InputGroupAddon align="inline-end" class="pr-0">
          <InputGroupButton
            class={buttonVariants({
              variant: "secondary",
              class: "rounded-l-none rounded-r-full px-4 border-l",
            })}
          >
            <Search />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <Button size="icon" variant="secondary" class="rounded-full">
        <Mic />
      </Button>
    </div>

    <div class="flex gap-3">
      <Button variant="secondary" class="rounded-full">
        <Plus />
        Create
      </Button>

      <Button class="rounded-full" variant="ghost" size="icon">
        <Bell />
      </Button>

      {#if $session.data}
        <Avatar>
          <AvatarImage src={$session.data.user.image} />
          <AvatarFallback class="uppercase">
            {$session.data.user.name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      {/if}
    </div>
  </div>
  <div class="flex gap-2 overflow-x-auto pt-2">
    {#each Categories as tag}
      <Button
        variant={tag === "All" ? "default" : "secondary"}
        class="rounded-lg shrink-0"
      >
        {tag}
      </Button>
    {/each}
  </div>
</nav>
