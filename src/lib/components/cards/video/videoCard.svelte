<script lang="ts">
  import { goto } from "$app/navigation";
  import { Avatar, AvatarFallback } from "$lib/components/ui/avatar";
  import { EllipsisVertical } from "@lucide/svelte";
  import VideocardDropdownmenu from "./videocard-dropdownmenu.svelte";

  let {
    id,
    title,
    thumbnail,
    channelId,
    channelName,
    channelInitials,
    views,
    uploadedAt,
  } = $props();
</script>

<a href="/watch/{id}" data-sveltekit-noscroll>
  <div class="w-full rounded-3xl hover:bg-accent">
    <div class="flex flex-col p-4">
      <div>
        <img
          src={thumbnail}
          alt={title}
          class="aspect-video rounded-2xl object-cover"
        />
      </div>
      <div class="flex gap-2 items-start mt-2">
        <div
          role="button"
          tabindex="0"
          class="cursor-pointer"
          onclick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            goto(`/channel/${channelId}`);
          }}
          onkeydown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              goto(`/channel/${channelId}`);
            }
          }}
        >
          <Avatar>
            <AvatarFallback>{channelInitials}</AvatarFallback>
          </Avatar>
        </div>
        <div class="flex flex-col flex-1">
          <div class="flex">
            <p class="font-medium line-clamp-2 flex-1">{title}</p>
            <div
              onclick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <VideocardDropdownmenu>
                <EllipsisVertical />
              </VideocardDropdownmenu>
            </div>
          </div>
          <p class="text-sm text-muted-foreground">{channelName}</p>
          <p class="text-xs mt-1 text-muted-foreground">
            {views} views • {uploadedAt}
          </p>
        </div>
      </div>
    </div>
  </div>
</a>
