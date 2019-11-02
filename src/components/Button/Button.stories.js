import Button from './Button.svelte';

export default { title: 'Button' };

export const Default = () => ({ Component: Button });

export const IncrementBy2 = () => ({
  Component: Button,
  props: { increment: 2 }
});
