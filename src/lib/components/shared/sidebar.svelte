<script>
  import {
    CircleStarIcon,
    HomeIcon,
    TextAlignJustify,
    HistoryIcon,
    ListMusicIcon,
    ClockIcon,
    ThumbsUpIcon,
    PlaySquareIcon,
    DownloadIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MusicIcon,
    RadioIcon,
    GamepadIcon,
  } from "@lucide/svelte";
  import Button from "../ui/button/button.svelte";
  import Logo from "./logo.svelte";
  import Separator from "../ui/separator/separator.svelte";
  import { page } from "$app/stores";
  import { Sheet, SheetContent } from "../ui/sheet";
  import { sidebar } from "./sidebar.svelte.ts";
  import { cn } from "$lib/utils";

  const mainNav = [
    { icon: HomeIcon, label: "Home", href: "/" },
    { icon: CircleStarIcon, label: "Shorts", href: "/shorts" },
  ];

  const youNav = [
    { icon: HistoryIcon, label: "History", href: "/history" },
    { icon: ListMusicIcon, label: "Playlists", href: "/playlists" },
    { icon: ClockIcon, label: "Watch later", href: "/watch-later" },
    { icon: ThumbsUpIcon, label: "Liked videos", href: "/liked" },
    { icon: PlaySquareIcon, label: "Your videos", href: "/your-videos" },
    { icon: DownloadIcon, label: "Downloads", href: "/downloads" },
  ];

  const exploreNav = [
    { icon: MusicIcon, label: "Music", href: "/music" },
    { icon: RadioIcon, label: "Live", href: "/live" },
    { icon: GamepadIcon, label: "Gaming", href: "/gaming" },
  ];
</script>

{#snippet Aside()}
  <div class="flex gap-2 p-2 overflow-visible">
    <Button
      onclick={() => sidebar.toggleState()}
      size="icon-lg"
      variant="ghost"
    >
      <TextAlignJustify />
    </Button>
    <div class="w-24 fixed top-4 md:left-12 left-4">
      <Logo />
    </div>
  </div>

  <div class="flex p-3 flex-col">
    {#each mainNav as item}
      <Button
        size="lg"
        variant={$page.url.pathname === item.href ? "secondary" : "ghost"}
        class="justify-start"
        href={item.href}
      >
        <item.icon />
        <span
          class={cn({
            "md:hidden": sidebar.state === "collapsed",
          })}
        >
          {item.label}
        </span>
      </Button>
    {/each}
  </div>

  <div
    class={cn({
      "md:hidden": sidebar.state === "collapsed",
    })}
  >
    <div class="px-3"><Separator /></div>

    <div class="flex p-3 flex-col">
      <Button size="lg" variant="ghost" class="justify-start" href="/feed/you">
        <span class="font-semibold">You</span>
        <ChevronRightIcon class="size-4" />
      </Button>
      {#each youNav as item}
        <Button
          size="lg"
          variant="ghost"
          class="justify-start"
          href={item.href}
        >
          <item.icon />
          {item.label}
        </Button>
      {/each}
      <Button size="lg" variant="ghost" class="justify-start">
        <ChevronDownIcon />
        Show more
      </Button>
    </div>

    <div class="px-3"><Separator /></div>

    <div class="flex p-3 flex-col">
      <span class="px-4 py-2 font-semibold">Explore</span>
      {#each exploreNav as item}
        <Button
          size="lg"
          variant="ghost"
          class="justify-start"
          href={item.href}
        >
          <item.icon />
          {item.label}
        </Button>
      {/each}
      <Button size="lg" variant="ghost" class="justify-start">
        <ChevronDownIcon />
        Show more
      </Button>
    </div>
  </div>
{/snippet}

<aside
  class="bg-background md:block sticky top-0 left-0 hidden overflow-y-auto w-full z-50 h-dvh"
>
  {@render Aside()}
</aside>

<Sheet bind:open={sidebar.open}>
  <SheetContent side="left">
    <div>
      {@render Aside()}
    </div>
  </SheetContent>
</Sheet>
