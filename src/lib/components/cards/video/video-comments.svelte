<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { SortDescIcon } from "@lucide/svelte";
</script>

<div class="flex flex-col mt-4">
  <div class="flex gap-2">
    <p class="text-xl font-bold">408 Comments</p>
    <Button size="lg" variant="ghost">
      <SortDescIcon />
      Sort By
    </Button>
  </div>
</div>
