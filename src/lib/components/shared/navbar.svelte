<script>
  import { Mic, Search } from "@lucide/svelte";
  import { buttonVariants } from "../ui/button";
  import { InputGroupAddon, InputGroup } from "../ui/input-group";
  import InputGroupButton from "../ui/input-group/input-group-button.svelte";
  import InputGroupInput from "../ui/input-group/input-group-input.svelte";
  import Button from "../ui/button/button.svelte";
</script>

<nav class="bg-accent/20 flex p-3 backdrop-blur-2xl">
  <div class="flex gap-2 flex-1 items-center justify-center">
    <InputGroup class="rounded-full max-w-[30em]">
      <InputGroupInput placeholder="search for anything" />
      <InputGroupAddon align="inline-end" class="pr-0">
        <InputGroupButton
          class={buttonVariants({
            variant: "secondary",
            class: "rounded-l-none rounded-r-full px-4 border-l",
          })}
        >
          <Search />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <Button size="icon" variant="secondary" class="rounded-full">
      <Mic />
    </Button>
  </div>
</nav>
