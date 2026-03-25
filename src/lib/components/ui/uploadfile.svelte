<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    accept?: string;
    multiple?: boolean;
    maxSizeMB?: number;
    children?: Snippet;
    onupload?: (urls: string[]) => void;
  };

  let {
    accept = "image/*,video/*",
    multiple = false,
    maxSizeMB = 50,
    children,
    onupload,
  }: Props = $props();

  let files = $state<FileList | null>(null);
  let previews = $state<string[]>([]);
  let uploading = $state(false);
  let progress = $state(0);
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

  async function uploadFile(file: File): Promise<string> {
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName: file.name, contentType: file.type }),
    });
    const { presignedUrl, publicUrl } = await res.json();

    await fetch(presignedUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type },
      body: file,
    });

    return publicUrl;
  }

  async function handleUpload() {
    if (!files) return;
    uploading = true;
    error = "";
    progress = 0;
    try {
      const urls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        urls.push(await uploadFile(files[i]));
        progress = Math.round(((i + 1) / files.length) * 100);
      }
      onupload?.(urls);
    } catch (e: any) {
      error = e.message;
    } finally {
      uploading = false;
    }
  }
</script>

<div>
  <input type="file" name="files" {accept} {multiple} onchange={handleChange} />
  {#if error}<p class="error">{error}</p>{/if}
  {#each previews as src}
    <img {src} alt="preview" style="max-width:200px" />
  {/each}
  {#if children}
    {@render children()}
  {/if}
  {#if uploading}
    <p>{progress}%</p>
  {/if}
  <button disabled={!files || uploading} onclick={handleUpload}>
    {uploading ? "Uploading..." : "Upload"}
  </button>
</div>
