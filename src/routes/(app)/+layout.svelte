<script lang="ts">
  import Navbar from "$lib/components/shared/navbar.svelte";
  import Sidebar from "$lib/components/shared/sidebar.svelte";
  import { sidebar } from "../../lib/components/shared/sidebar.svelte.ts";
  import { cn } from "$lib/utils";
  import { page } from "$app/state";
  import Logo from "$lib/components/shared/logo.svelte";

  let { children } = $props();
</script>

<div
  class={cn("md:grid overflow-hidden h-dvh w-full grid-cols-[13em_1fr]", {
    "grid-cols-[4em_1fr]": sidebar.state === "collapsed",
  })}
>
  <Sidebar />
  <div class="flex z-40 h-full flex-col overflow-auto">
    <Navbar />
    <div class="md:p-0 px-2 pb-4!">
      {@render children()}
    </div>
  </div>
</div>
