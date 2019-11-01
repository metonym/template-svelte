import { configure } from '@storybook/svelte';

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
