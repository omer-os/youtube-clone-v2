<script>
  import { createListChannels } from "$lib/api/channels/channels";
  import Videocard from "$lib/components/cards/video/videocard.svelte";
  import Homelayoutgrid from "$lib/components/home/homelayoutgrid.svelte";

  const query = createListChannels(() => ({
    page: 1,
    size: 10,
  }));
</script>

<Homelayoutgrid>
  {#if query.isLoading}
    <p>Loading...</p>
  {:else if query.isSuccess}
    {#each query.data.data.data as item}
      <Videocard />
    {/each}
  {/if}
  {#each query.data?.data.data as item}
    <Videocard />
  {/each}
</Homelayoutgrid>
