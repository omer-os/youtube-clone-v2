<script lang="ts">
  let { children } = $props();
</script>

<div class="flex gap-4">
  {@render children()}
</div>
