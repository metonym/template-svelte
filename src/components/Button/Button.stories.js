import { withKnobs, number } from '@storybook/addon-knobs';
import Button from './Button.svelte';

export default { title: 'Button', decorators: [withKnobs] };

export const Default = () => ({
  Component: Button,
  props: { increment: number('increment', 1) }
});
