<script lang="ts">
  import {
    PopoverContent,
    PopoverTrigger,
    Popover,
  } from "$lib/components/ui/popover";
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    ListVideoIcon,
    ClockIcon,
    BookmarkIcon,
    DownloadIcon,
    ShareIcon,
    BanIcon,
    CircleOffIcon,
    FlagIcon,
  } from "@lucide/svelte";

  let { children } = $props();

  const items = [
    { icon: ListVideoIcon, label: "Add to queue" },
    { icon: ClockIcon, label: "Save to Watch later" },
    { icon: BookmarkIcon, label: "Save to playlist" },
    { icon: DownloadIcon, label: "Download" },
    { icon: ShareIcon, label: "Share" },
    { icon: BanIcon, label: "Not interested" },
    { icon: CircleOffIcon, label: "Don't recommend channel" },
    { icon: FlagIcon, label: "Report" },
  ];
</script>

<Popover>
  <PopoverTrigger>
    {@render children()}
  </PopoverTrigger>
  <PopoverContent
    align="end"
    onInteractOutside={(e) => e.stopPropagation()}
    class="bg-secondary p-1 w-64 gap-0"
  >
    {#each items as item}
      <Button
        variant="ghost"
        class="w-full justify-start hover:!bg-primary/30 h-12 gap-3"
        size="sm"
      >
        <item.icon class="size-4" />
        {item.label}
      </Button>
    {/each}
  </PopoverContent>
</Popover>
