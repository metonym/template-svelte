<script>
  export let increment = 1;

  import { add } from "./add";

  let count = 0;

  function handleClick() {
    count = add(count, increment);
  }

  function resetCount() {
    count = 0;
  }

  $: displayResetButton = count > 0;
</script>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  button {
    font: inherit;
    background: none;
  }
</style>

<h1>{count}</h1>

<button on:click="{handleClick}">Increment by {increment}</button>

{#if displayResetButton}<button on:click="{resetCount}">Reset</button>{/if}
