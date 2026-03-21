<script>
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardHeader } from "$lib/components/ui/card";
  import { X } from "@lucide/svelte";
</script>

<div class="md:flex-row flex-col flex gap-4">
  <div class="flex flex-col flex-[2]">
    <div class="overflow-hidden rounded-2xl">
      <video controls autoplay muted class="aspect-video w-full object-cover">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <div class="flex-1 md:mt-1">
    <Card class="p-0">
      <CardHeader class="md:bg-secondary flex py-4">
        <div class="flex flex-col flex-1">
          <p class="text-lg font-medium">ash aglha pohas ahs aosh aosgh</p>
          <p class="text-muted-foreground">
            Mixes are playlists YouTube makes for you
          </p>
        </div>

        <Button size="icon" variant="ghost" class="rounded-full">
          <X />
        </Button>
      </CardHeader>
      <CardContent>
        <div class="flex gap-3 flex-col">
          <div class="flex gap-4">
            <div class="aspect-video w-[10em] rounded-lg bg-secondary"></div>
            <div class="flex flex-col flex-1">
              <p class="font-medium">hkjh ashgj asghjash</p>
              <p class="text-muted-foreground">ahsgkhb ah</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="aspect-video w-[10em] rounded-lg bg-secondary"></div>
            <div class="flex flex-col flex-1">
              <p class="font-medium">hkjh ashgj asghjash</p>
              <p class="text-muted-foreground">ahsgkhb ah</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="aspect-video w-[10em] rounded-lg bg-secondary"></div>
            <div class="flex flex-col flex-1">
              <p class="font-medium">hkjh ashgj asghjash</p>
              <p class="text-muted-foreground">ahsgkhb ah</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="aspect-video w-[10em] rounded-lg bg-secondary"></div>
            <div class="flex flex-col flex-1">
              <p class="font-medium">hkjh ashgj asghjash</p>
              <p class="text-muted-foreground">ahsgkhb ah</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>
