<script lang="ts">
  import Navbar from "$lib/components/shared/navbar.svelte";
  import Sidebar from "$lib/components/shared/sidebar.svelte";

  let { children } = $props();
</script>

<div class="grid overflow-hidden h-dvh w-full grid-cols-[13em_1fr]">
  <Sidebar />
  <div class="flex flex-col overflow-auto">
    <Navbar />
    {@render children()}
  </div>
</div>
