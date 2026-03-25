<script lang="ts">
  import { enhance } from "$app/forms";

  type Props = {
    accept?: string;
    multiple?: boolean;
    maxSizeMB?: number;
  };

  let {
    accept = "image/*,video/*",
    multiple = false,
    maxSizeMB = 50,
  }: Props = $props();

  let files = $state<FileList | null>(null);
  let previews = $state<string[]>([]);
  let uploading = $state(false);
  let error = $state("");

  function handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    files = input.files;
    error = "";
    previews = [];

    if (!files) return;

    for (const file of files) {
      if (file.size > maxSizeMB * 1024 * 1024) {
        error = `${file.name} exceeds ${maxSizeMB}MB limit`;
        files = null;
        return;
      }
      if (file.type.startsWith("image/")) {
        previews.push(URL.createObjectURL(file));
      }
    }
  }
</script>

<form
  method="POST"
  action="?/upload"
  enctype="multipart/form-data"
  use:enhance={() => {
    uploading = true;
    return async ({ update }) => {
      uploading = false;
      await update();
    };
  }}
>
  <input type="file" name="files" {accept} {multiple} onchange={handleChange} />

  {#if error}<p class="error">{error}</p>{/if}

  {#each previews as src}
    <img {src} alt="preview" style="max-width:200px" />
  {/each}

  <button disabled={!files || uploading}>
    {uploading ? "Uploading..." : "Upload"}
  </button>
</form>
