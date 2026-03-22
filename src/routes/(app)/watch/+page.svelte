<script>
  import VideoComments from "$lib/components/cards/video/video-comments.svelte";
  import VideoMetadata from "$lib/components/cards/video/video-metadata.svelte";
  import VideocardSmall from "$lib/components/cards/video/videocard-small.svelte";
  import FilterChipsNav from "$lib/components/navs/filter-chips-nav.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="lg:flex-row flex-col flex gap-4">
  <div class="flex flex-col flex-2 w-full">
    <div class="overflow-hidden rounded-2xl">
      <video controls autoplay muted class="aspect-video w-full object-cover">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>

    <VideoMetadata />
    <div class="w-full lg:flex hidden">
      <VideoComments />
    </div>
  </div>

  <div class="flex-1 md:mt-1 min-w-0">
    <div class="sticky py-1 bg-background z-30 top-[4.4em] lg:top-[3.5em]">
      <FilterChipsNav />
    </div>
    <VideocardSmall />
    <VideocardSmall />
    <VideocardSmall />
    <VideocardSmall />
    <VideocardSmall />
    <VideocardSmall />
    <VideocardSmall />
    <VideocardSmall />
    <Button variant="outline" class="w-full rounded-full mt-2" size="lg"
      >Show More</Button
    >
  </div>

  <!-- Comments area for small screens  -->
  <div class="lg:hidden pb-20">
    <VideoComments />
  </div>
</div>
