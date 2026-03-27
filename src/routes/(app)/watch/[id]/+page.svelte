<script lang="ts">
  import { createShowVideo, createListVideos } from "$lib/api/videos/videos.js";
  import { createListComments } from "$lib/api/comments/comments.js";
  import VideoComments from "$lib/components/cards/video/video-comments.svelte";
  import VideoMetadata from "$lib/components/cards/video/video-metadata.svelte";
  import VideocardSmall from "$lib/components/cards/video/videocard-small.svelte";
  import FilterChipsNav from "$lib/components/navs/filter-chips-nav.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Loader2Icon } from "@lucide/svelte";

  const { params } = $props();

  const video = createShowVideo(() => params.id);
  const comments = createListComments(
    () => params.id,
    () => ({ page: 1, size: 20 }),
  );
  const relatedVideos = createListVideos(() => ({ page: 1, size: 10 }));

  const v = $derived(video.data?.data.data);
  const commentData = $derived(comments.data?.data);
  const related = $derived(relatedVideos.data?.data.data ?? []);
</script>

<div class="lg:flex-row flex-col flex gap-4">
  <div class="flex flex-col flex-2 w-full">
    <div class="overflow-hidden rounded-2xl">
      {#if v}
        <video
          controls
          autoplay
          muted
          class="aspect-video w-full object-cover bg-black"
        >
          <source src={v.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      {:else}
        <div
          class="aspect-video w-full bg-muted animate-pulse rounded-2xl"
        ></div>
      {/if}
    </div>

    {#if v}
      <VideoMetadata video={v} />
    {/if}

    <div class="w-full lg:flex hidden">
      <!-- <VideoComments -->
      <!--   videoId={params.id} -->
      <!--   comments={commentData?.data ?? []} -->
      <!--   meta={commentData?.meta} -->
      <!--   isLoading={comments.isLoading} -->
      <!-- /> -->
    </div>
  </div>

  <div class="flex-1 md:mt-1 min-w-0">
    <div class="sticky py-1 bg-background z-30 top-[4.4em] lg:top-[3.5em]">
      <FilterChipsNav />
    </div>
    {#each related as rv (rv.id)}
      <VideocardSmall video={rv} />
    {:else}
      {#if relatedVideos.isLoading}
        <div class="flex justify-center py-8">
          <Loader2Icon class="animate-spin text-muted-foreground" />
        </div>
      {/if}
    {/each}
    <Button variant="outline" class="w-full rounded-full mt-2" size="lg">
      Show More
    </Button>
  </div>

  <div class="lg:hidden pb-20">
    <!-- <VideoComments -->
    <!--   videoId={params.id} -->
    <!--   comments={commentData?.data ?? []} -->
    <!--   meta={commentData?.meta} -->
    <!--   isLoading={comments.isLoading} -->
    <!-- /> -->
  </div>
</div>
