<script lang="ts">
  let { children } = $props();
</script>

<div class="grid w-full md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
  {@render children()}
</div>
