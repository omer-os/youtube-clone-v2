<script lang="ts">
  let { children } = $props();
</script>

<div
  class="grid w-full md:px-0 px-2 pb-20 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
>
  {@render children()}
</div>
