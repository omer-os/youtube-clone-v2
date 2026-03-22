<script>
  import VideoComments from "$lib/components/cards/video/video-comments.svelte";
  import VideoMetadata from "$lib/components/cards/video/video-metadata.svelte";
  import VideocardSmall from "$lib/components/cards/video/videocard-small.svelte";
</script>

<div class="md:flex-row flex-col flex gap-4 w-full">
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
    <VideoComments />
  </div>
  <div class="flex-1 md:mt-1">
    <VideocardSmall />
    <VideocardSmall />
    <VideocardSmall />
    <VideocardSmall />
    <VideocardSmall />
  </div>
</div>
