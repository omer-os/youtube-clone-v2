<script lang="ts">
  import Navbar from "$lib/components/shared/navbar.svelte";
  import Sidebar from "$lib/components/shared/sidebar.svelte";

  let { children } = $props();
</script>

<div class="md:grid overflow-hidden h-dvh w-full grid-cols-[13em_1fr]">
  <Sidebar />
  <div class="flex h-full flex-col overflow-auto">
    <Navbar />
    <div class="md:p-0 px-2">
      {@render children()}
    </div>
  </div>
</div>
