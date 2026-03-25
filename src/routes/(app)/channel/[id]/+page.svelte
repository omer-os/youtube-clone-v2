<script lang="ts">
  import TabsContent from "$lib/components/ui/tabs/tabs-content.svelte";
  import TabsList from "$lib/components/ui/tabs/tabs-list.svelte";
  import TabsTrigger from "$lib/components/ui/tabs/tabs-trigger.svelte";
  import Tabs from "$lib/components/ui/tabs/tabs.svelte";

  const playlists = [
    {
      name: "work",
      videos: 25,
      visibility: "Public",
      thumbnail: "https://picsum.photos/seed/work/320/180",
    },
    {
      name: "hibhibpop",
      videos: 11,
      visibility: "Public",
      updated: "Updated 5 days ago",
      thumbnail: "https://picsum.photos/seed/hibhib/320/180",
    },
    {
      name: "alarm",
      videos: 1,
      visibility: "Public",
      thumbnail: "https://picsum.photos/seed/alarm/320/180",
    },
    {
      name: "study piano",
      videos: 3,
      visibility: "Public",
      thumbnail: "https://picsum.photos/seed/piano/320/180",
    },
    {
      name: "mmm",
      videos: 7,
      visibility: "Public",
      thumbnail: "https://picsum.photos/seed/mmm/320/180",
    },
    {
      name: "Rock",
      videos: 16,
      visibility: "Public",
      thumbnail: "https://picsum.photos/seed/rock/320/180",
    },
  ];
</script>

<div class="flex flex-col gap-4 p-4">
  <div class="flex flex-col sm:flex-row sm:items-start gap-4">
    <img
      class="w-24 h-24 sm:w-40 sm:h-40 rounded-full"
      src="https://i.pinimg.com/1200x/05/c7/21/05c721269ec50303a652364eac0c6e30.jpg"
      alt=""
    />
    <div class="flex flex-col gap-2 sm:text-left">
      <div class="font-bold text-2xl sm:text-3xl">blazi</div>
      <div class="flex gap-2">
        <div class="font-bold">@blazi</div>
        <div class="text-muted-foreground">100 subscribers</div>
      </div>
      <div
        class="text-muted-foreground line-clamp-2 sm:line-clamp-1 max-w-[20em]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        reprehenderit obcaecati atque accusamus fuga possimus saepe debitis
        harum quia, eum deserunt deleniti totam similique maxime assumenda
        consequatur iure quam ullam?
      </div>
    </div>
  </div>
  <Tabs value="home">
    <TabsList class="w-full">
      <TabsTrigger value="home">Home</TabsTrigger>
      <TabsTrigger value="playlist">Playlist</TabsTrigger>
      <TabsTrigger value="posts">Posts</TabsTrigger>
    </TabsList>
    <TabsContent value="home">
      <div class="flex flex-col gap-3 pt-4">
        <h2 class="text-lg font-bold">Created playlists</h2>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3"
        >
          {#each playlists as pl}
            <button class="group flex flex-col gap-2 text-left">
              <div class="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={pl.thumbnail}
                  alt={pl.name}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div
                  class="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded flex gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-3"
                  >
                    <path
                      d="M3 5h12v2H3zm0 4h12v2H3zm0 4h8v2H3zm14-8v12l6-6z"
                    />
                  </svg>
                  {pl.videos} videos
                </div>
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="text-sm font-medium truncate">{pl.name}</span>
                <span class="text-xs text-muted-foreground">
                  {pl.visibility}{pl.updated ? ` · ${pl.updated}` : ""}
                </span>
                <span
                  class="text-xs text-muted-foreground group-hover:text-foreground transition-colors"
                  >View full playlist</span
                >
              </div>
            </button>
          {/each}
        </div>
      </div>
    </TabsContent>
    <TabsContent value="playlist">playlist</TabsContent>
    <TabsContent value="posts">posts</TabsContent>
  </Tabs>
</div>
