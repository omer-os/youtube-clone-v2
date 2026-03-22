<script>
  import { Avatar } from "$lib/components/ui/avatar";
  import AvatarFallback from "$lib/components/ui/avatar/avatar-fallback.svelte";
  import AvatarImage from "$lib/components/ui/avatar/avatar-image.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import CardContent from "$lib/components/ui/card/card-content.svelte";
  import CardHeader from "$lib/components/ui/card/card-header.svelte";
  import Card from "$lib/components/ui/card/card.svelte";
  import {
    Bookmark,
    ChefHatIcon,
    EllipsisVertical,
    Share,
    Sparkle,
    ThumbsDownIcon,
    ThumbsUpIcon,
  } from "@lucide/svelte";
</script>

<div class="flex w-full flex-col gap-2 mt-4">
  <div class="text-xl font-bold">
    1 hour Lo-Fi Azerbaijani Piano music - Etibar Asadli
  </div>
  <div
    class="flex w-full justify-between min-w-0 gap-2 lg:flex-row flex-col lg:items-center"
  >
    <div class="flex gap-2 items-center shrink-0 flex-wrap">
      <Avatar size="lg">
        <AvatarImage
          src="https://yt3.ggpht.com/Zzh59LLl-0RuJZz6t1S5gbqkKh-uvfyY1uJlceO_9Eb04duIBMwfOm7sqg1uCgGwqZ4nGzLMqQ=s88-c-k-c0x00ffffff-no-rj"
        />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <div class="flex flex-col">
        <p class="font-bold">Etibar ASADLI</p>
        <p class="text-sm text-muted-foreground">31.2K subscribers</p>
      </div>
      <Button class="rounded-full" size="lg">Subscribe</Button>
    </div>
    <div class="flex flex-nowrap overflow-auto gap-2">
      <div class="flex">
        <button
          class="flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-l-full border-r border-border"
        >
          <ThumbsUpIcon class="size-4" />
          Like
        </button>
        <button
          class="flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-r-full"
        >
          <ThumbsDownIcon class="size-4" />
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
    <Card class="p-2 flex flex-col gap-0 bg-secondary flex-1">
      <CardHeader>279K views 4 years ago</CardHeader>
      <CardContent>
        <p class="line-clamp-2">
          1 hour Lo-Fi Azerbaijani Piano music / 1 saat LoFi Azərbaycan Piano
          musiqisi Piano / Produced by Etibar Asadli Songlist: 00:01 - Axşam
          mahnısı (Qəmgin mahnı) 03:00 - Bana bana gəl 07:00 - Göy göl
        </p>
      </CardContent>
    </Card>
    <Card class="p-2 flex flex-col gap-0 bg-secondary flex-1">
      <CardHeader>Live chat replay</CardHeader>
      <CardContent class="flex gap-2">
        <ChefHatIcon />
        <p class="text-xs">
          See what others said about this video while it was live.
        </p>
        <Button size="sm" class="rounded-full self-end" variant="secondary"
          >Open Panel</Button
        >
      </CardContent>
    </Card>
  </div>
</div>
