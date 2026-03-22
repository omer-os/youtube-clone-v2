<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { EllipsisVertical, Tv } from "@lucide/svelte";
  import VideocardDropdownmenu from "./videocard-dropdownmenu.svelte";
</script>

<a href="/watch?id=sdhsafh">
  <div class="flex hover:bg-secondary rounded-2xl p-2 gap-2">
    <div class="">
      <img
        src="https://i.pinimg.com/1200x/6d/43/ff/6d43ff303f3abd9131e96371596c1a55.jpg"
        alt=""
        class="rounded-xl aspect-video max-w-40"
      />
    </div>

    <div class="flex flex-col flex-1">
      <p class="font-medium">lorem ipsum dulur</p>
      <p class="text-sm flex items-center gap-2">
        mr beat

        <Tv size={10} />
      </p>
      <p class="flex text-muted-foreground text-xs">265K views • 6 years ago</p>
    </div>

    <div
      onclick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      class="relative top-2"
    >
      <VideocardDropdownmenu>
        <EllipsisVertical />
      </VideocardDropdownmenu>
    </div>
  </div>
</a>
