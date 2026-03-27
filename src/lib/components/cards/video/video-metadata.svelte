<script lang="ts">
  import { Avatar } from "$lib/components/ui/avatar";
  import AvatarFallback from "$lib/components/ui/avatar/avatar-fallback.svelte";
  import AvatarImage from "$lib/components/ui/avatar/avatar-image.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import CardContent from "$lib/components/ui/card/card-content.svelte";
  import CardHeader from "$lib/components/ui/card/card-header.svelte";
  import Card from "$lib/components/ui/card/card.svelte";
  import {
    Bookmark,
    ChevronDown,
    ChevronUp,
    EllipsisVertical,
    Share,
    Sparkle,
    ThumbsDownIcon,
    ThumbsUpIcon,
  } from "@lucide/svelte";
  import { timeAgo } from "$lib/utils";
  import type { ShowVideo200Data } from "$lib/api/model";

  let { video }: { video: ShowVideo200Data } = $props();
  let descExpanded = $state(false);

  function fmt(n: number) {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return n.toString();
  }
</script>

<div class="flex w-full flex-col gap-2 mt-4">
  <div class="text-xl font-bold">
    {video.title}
  </div>
  <div
    class="flex w-full justify-between min-w-0 gap-2 lg:flex-row flex-col lg:items-center"
  >
    <div class="flex gap-2 items-center shrink-0 flex-wrap">
      <a href="/channel/{video.channel.id}">
        <Avatar size="lg">
          {#if video.channel.avatarUrl}
            <AvatarImage src={video.channel.avatarUrl} />
          {/if}
          <AvatarFallback
            >{video.channel.name.slice(0, 2).toUpperCase()}</AvatarFallback
          >
        </Avatar>
      </a>
      <div class="flex flex-col">
        <a href="/channel/{video.channel.id}" class="font-bold hover:underline">
          {video.channel.name}
        </a>
        <p class="text-sm text-muted-foreground">
          {fmt(video.channel.subscriberCount)} subscribers
        </p>
      </div>
      <Button
        class="rounded-full"
        size="lg"
        variant={video.channel.isSubscribed ? "outline" : "default"}
      >
        {video.channel.isSubscribed ? "Subscribed" : "Subscribe"}
      </Button>
    </div>
    <div class="flex flex-nowrap overflow-auto gap-2">
      <div class="flex">
        <button
          class="flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-l-full border-r border-border"
        >
          <ThumbsUpIcon
            class="size-4 {video.myReaction === 'LIKE' ? 'fill-current' : ''}"
          />
          {fmt(video.likes)}
        </button>
        <button
          class="flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-r-full"
        >
          <ThumbsDownIcon
            class="size-4 {video.myReaction === 'DISLIKE'
              ? 'fill-current'
              : ''}"
          />
        </button>
      </div>
      <button
        class="flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
      >
        <Share class="size-4" />
        Share
      </button>
      <button
        class="flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
      >
        <Sparkle class="size-4" />
        Ask
      </button>
      <button
        class="flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
      >
        <Bookmark class="size-4" />
        Save
      </button>
      <button
        class="flex items-center justify-center min-w-10 size-10 bg-secondary text-secondary-foreground rounded-full"
      >
        <EllipsisVertical class="size-4" />
      </button>
    </div>
  </div>
  <div class="flex lg:flex-row flex-col gap-3">
    <button
      class="text-left flex-1"
      onclick={() => (descExpanded = !descExpanded)}
    >
      <Card
        class="p-2 flex flex-col gap-0 bg-secondary flex-1 hover:bg-muted transition-colors"
      >
        <CardHeader>
          {fmt(video.views)} views · {timeAgo(video.createdAt)}
        </CardHeader>
        <CardContent>
          {#if video.description}
            <p class:line-clamp-2={!descExpanded} class="whitespace-pre-line">
              {video.description}
            </p>
          {/if}
          <span
            class="text-sm font-semibold mt-1 inline-flex items-center gap-1"
          >
            {descExpanded ? "Show less" : "...more"}
            {#if descExpanded}<ChevronUp size={14} />{:else}<ChevronDown
                size={14}
              />{/if}
          </span>
        </CardContent>
      </Card>
    </button>
  </div>
</div>
