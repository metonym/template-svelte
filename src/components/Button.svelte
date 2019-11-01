<script>
  import { add } from './add';
  export let increment = 1;

  let count = 0;

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
<p>Count incremented by {increment}</p>

<button
  on:click={() => {
    count = add(count, increment);
  }}>
  Increment
</button>

{#if displayResetButton}
  <button
    on:click={() => {
      count = 0;
    }}>
    Reset
  </button>
{/if}
