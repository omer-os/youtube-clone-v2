<script>
  import {
    Bell,
    LogInIcon,
    Mic,
    Plus,
    Search,
    TextAlignJustify,
  } from "@lucide/svelte";
  import { buttonVariants } from "../ui/button";
  import { InputGroupAddon, InputGroup } from "../ui/input-group";
  import InputGroupButton from "../ui/input-group/input-group-button.svelte";
  import InputGroupInput from "../ui/input-group/input-group-input.svelte";
  import Button from "../ui/button/button.svelte";
  import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
  import { authClient } from "$lib/auth-client";
  import Logo from "./logo.svelte";
  import { sidebar } from "./sidebar.svelte.ts";
  import { cn } from "$lib/utils";
  import { page } from "$app/state";
  import FilterChipsNav from "../navs/filter-chips-nav.svelte";

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

<nav class="bg-background z-50 flex flex-col sticky top-0 p-3">
  <div class="flex">
    <div class="flex md:hidden gap-2 p-2">
      <Button onclick={() => sidebar.toggle()} size="icon" variant="ghost">
        <TextAlignJustify />
      </Button>
      <a class="flex items-center" href="/">
        <div class="w-24">
          <Logo />
        </div>
      </a>
    </div>

    <div class="md:hidden flex-1" />

    <div
      class={cn("md:flex hidden gap-2 flex-1 items-center justify-center", {
        "md:pl-16": sidebar.state === "collapsed",
      })}
    >
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

    <div class="flex gap-3 items-center">
      {#if $session.data}
        <Button variant="secondary" class="rounded-full">
          <Plus />
          Create
        </Button>
      {:else}
        <Button href="/auth/login" variant="outline">
          Login
          <LogInIcon />
        </Button>
      {/if}

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
  <div
    class={cn("pt-2 px-3", {
      hidden: page.url.pathname === "/watch",
    })}
  >
    <FilterChipsNav />
  </div>
</nav>
