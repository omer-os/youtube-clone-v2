<script>
  import { createListVideos } from "$lib/api/videos/videos";
  import VideoCard from "$lib/components/cards/video/videoCard.svelte";
  import Homelayoutgrid from "$lib/components/home/homelayoutgrid.svelte";
  import { timeAgo } from "$lib/utils";

  const query = createListVideos(() => ({
    page: 1,
    size: 10,
  }));
</script>

<Homelayoutgrid>
  {#if query.isLoading}
    <p>Loading...</p>
  {:else if query.isSuccess}
    {#each query.data.data.data as item}
      <VideoCard
        id={item.id}
        title={item.title}
        thumbnail={item.thumbnailUrl}
        channelId={item.channelId}
        channelName={item.channelName}
        channelInitials={item.channelName.slice(0, 2)}
        views={item.views}
        uploadedAt={timeAgo(item.createdAt)}
      />
    {/each}
  {/if}
</Homelayoutgrid>
