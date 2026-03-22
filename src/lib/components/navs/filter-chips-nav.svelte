<script lang="ts">
  import { ChevronLeft, ChevronRightIcon } from "@lucide/svelte";
  import { Button } from "../ui/button";

  let scrollRef = $state<null | HTMLDivElement>(null);
  let canScrollLeft = $state(false);
  let canScrollRight = $state(true);

  function updateScrollState() {
    if (!scrollRef) return;
    canScrollLeft = scrollRef.scrollLeft > 0;
    canScrollRight =
      scrollRef.scrollLeft + scrollRef.clientWidth < scrollRef.scrollWidth - 1;
  }

  const Categories = [
    "All",
    "Gaming",
    "Source code",
    "APIs",
    "AI",
    "Podcasts",
    "Music",
    "Mixes",
    "Exploit",
    "Satire",
    "Live",
    "Computer Hardware",
    "Gadgets",
    "Role-Playing Games",
    "Recently uploaded",
  ];
</script>

<div class="relative w-full">
  <div
    bind:this={scrollRef}
    class="flex gap-2 overflow-x-auto"
    class:pr-12={canScrollRight}
    class:pl-12={canScrollLeft}
    onscroll={updateScrollState}
  >
    {#each Categories as tag}
      <Button
        variant={tag === "All" ? "default" : "secondary"}
        class="rounded-lg shrink-0"
      >
        {tag}
      </Button>
    {/each}
  </div>

  {#if canScrollLeft}
    <div
      class="absolute left-0 top-0 z-10 flex w-14 justify-start bg-linear-to-r from-background via-background to-background/0"
    >
      <Button
        size="icon"
        variant="outline"
        onclick={() => scrollRef?.scrollBy({ left: -300, behavior: "smooth" })}
      >
        <ChevronLeft />
      </Button>
    </div>
  {/if}

  {#if canScrollRight}
    <div
      class="absolute right-0 top-0 z-10 flex w-14 justify-end bg-linear-to-l from-background via-background to-background/0"
    >
      <Button
        size="icon"
        variant="outline"
        onclick={() => scrollRef?.scrollBy({ left: 300, behavior: "smooth" })}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  {/if}
</div>
