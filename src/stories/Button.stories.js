import Button from '../components/Button.svelte';

export default { title: 'Button' };

export const Default = () => ({
  Component: Button,
  props: {}
});

export const Increment = () => ({
  Component: Button,
  props: { increment: 2 }
});
