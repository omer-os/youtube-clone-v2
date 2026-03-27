<script lang="ts">
  import { EllipsisVertical, Tv } from "@lucide/svelte";
  import VideocardDropdownmenu from "./videocard-dropdownmenu.svelte";
  import type { showVideoResponse } from "$lib/api/videos/videos";
  import { timeAgo } from "$lib/utils";
  import type { ListVideos200DataItem } from "$lib/api/model";

  let { video }: { video: ListVideos200DataItem } = $props();

  function fmt(n: number) {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return n.toString();
  }
</script>

<a href="/watch/{video.id}">
  <div class="flex hover:bg-secondary rounded-2xl p-2 gap-2">
    <div>
      <img
        src={video.thumbnailUrl ?? "https://placehold.co/320x180?text=No+Thumb"}
        alt={video.title}
        class="rounded-xl aspect-video max-w-40 object-cover"
      />
    </div>
    <div class="flex flex-col flex-1 min-w-0">
      <p class="font-medium line-clamp-2">{video.title}</p>
      <p class="text-sm flex items-center gap-2 text-muted-foreground">
        {video.channelName ?? ""}
        <Tv size={10} />
      </p>
      <p class="flex text-muted-foreground text-xs">
        {fmt(video.views)} views • {timeAgo(video.createdAt)}
      </p>
    </div>
    <div
      onclick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      class="relative top-2"
    >
      <VideocardDropdownmenu>
        <EllipsisVertical />
      </VideocardDropdownmenu>
    </div>
  </div>
</a>
