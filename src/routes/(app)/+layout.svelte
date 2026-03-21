<script lang="ts">
  import Navbar from "$lib/components/shared/navbar.svelte";
  import Sidebar from "$lib/components/shared/sidebar.svelte";

  let { children } = $props();
</script>

<div class="grid h-dvh w-full grid-rows-[auto_1fr] grid-cols-[13em_1fr]">
  <Sidebar />
  <Navbar />
  <div class="p-2">
    {@render children()}
  </div>
</div>
