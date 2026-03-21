<script>
  import { Avatar, AvatarFallback } from "$lib/components/ui/avatar";
  import Button from "$lib/components/ui/button/button.svelte";
  import { EllipsisVertical } from "@lucide/svelte";
</script>

<div class="w-full rounded-3xl hover:bg-accent">
  <div class="flex flex-col p-4">
    <div>
      <img
        src="https://i.pinimg.com/1200x/7d/2c/ea/7d2cea62a4d0bf8d63d16a3a9a90f588.jpg"
        alt=""
        class="aspect-video rounded-2xl"
      />
    </div>

    <div class="flex gap-2 items-start mt-2">
      <Avatar>
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>

      <div class="flex flex-col">
        <div class="flex">
          <p class="font-medium line-clamp-2 flex-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            perferendis voluptas enim, magnam quo non accusantium officia
            voluptate provident dolorum, voluptatem sit fuga dignissimos
            deleniti quod modi cupiditate exercitationem debitis?
          </p>

          <Button variant="ghost" size="icon">
            <EllipsisVertical />
          </Button>
        </div>
        <p class="text-sm text-muted-foreground">Lolipop</p>
        <p class="text-xs mt-1 text-muted-foreground">24K views • 1 day ago</p>
      </div>
    </div>
  </div>
</div>
