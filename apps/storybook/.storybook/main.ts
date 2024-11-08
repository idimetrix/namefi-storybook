import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const getAbsolutePath = (value: string): string =>
	dirname(require.resolve(join(value, 'package.json')));

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-interactions'),
		getAbsolutePath('@storybook/addon-designs'),
		getAbsolutePath('@storybook/addon-mdx-gfm'),
		getAbsolutePath('storybook-css-modules'),
		getAbsolutePath('@chromatic-com/storybook'),
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	docs: {},
};
export default config;
