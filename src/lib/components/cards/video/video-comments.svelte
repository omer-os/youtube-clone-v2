<script>
  import AvatarFallback from "$lib/components/ui/avatar/avatar-fallback.svelte";
  import AvatarImage from "$lib/components/ui/avatar/avatar-image.svelte";
  import Avatar from "$lib/components/ui/avatar/avatar.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import {
    ChevronDown,
    SortDescIcon,
    ThumbsDownIcon,
    ThumbsUpIcon,
  } from "@lucide/svelte";
</script>

{#snippet Comment()}
  <div class="flex gap-2">
    <Avatar>
      <AvatarImage
        src="https://i.pinimg.com/1200x/6d/43/ff/6d43ff303f3abd9131e96371596c1a55.jpg"
      />
      <AvatarFallback>SP</AvatarFallback>
    </Avatar>

    <div class="flex flex-col">
      <div class="flex gap-2 flex-row">
        <p class="font-bold text-sm">@muradqasimov9674</p>
        <p class="text-muted-foreground text-sm">2 years ago</p>
      </div>
      <p class="text-xs mt-2 text-muted-foreground">
        Literally to the 1% who's reading this, God bless you, and may your
        dreams come true, stay safe and have a wonderful day 💗
      </p>
      <p
        class="text-muted-foreground mt-2 text-sm font-medium hover:underline w-max"
      >
        Translate to English
      </p>

      <div class="flex mt-1 relative -left-2 gap-2 items-center">
        <Button size="sm" variant="ghost">
          <ThumbsUpIcon />
          <span class="text-muted-foreground">240</span>
        </Button>
        <Button size="sm" variant="ghost">
          <ThumbsDownIcon />
        </Button>

        <Button size="sm" variant="ghost">Reply</Button>
      </div>

      <Button class="w-max relative -left-2 mt-1" variant="ghost"
        >29 Replies
        <ChevronDown />
      </Button>
    </div>
  </div>
{/snippet}

<div class="flex flex-col mt-4">
  <div class="flex gap-2">
    <p class="text-xl font-bold">408 Comments</p>
    <Button size="lg" variant="ghost">
      <SortDescIcon />
      Sort By
    </Button>
  </div>

  <div class="flex gap-2">
    <Avatar>
      <AvatarImage
        src="https://i.pinimg.com/1200x/6d/43/ff/6d43ff303f3abd9131e96371596c1a55.jpg"
      />
      <AvatarFallback>SP</AvatarFallback>
    </Avatar>

    <Input placeholder="Add a comment" />
  </div>

  <div class="flex flex-col mt-4 gap-4">
    {@render Comment()}
    {@render Comment()}
    {@render Comment()}
    {@render Comment()}
    {@render Comment()}
  </div>
</div>
