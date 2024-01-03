import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import Button from '../components/Button';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		type: {
			options: ['primary', 'outline', 'text'],
			control: { type: 'select' },
		},
		height: {
			options: ['h-5', 'h-6', 'h-8', 'h-10', 'h-12'],
			control: { type: 'select' },
		},
		disabled: { control: 'boolean', defaultValue: false },
	},
};

export default meta;

export const PrimaryButton: StoryObj<typeof Button> = {
	args: {
		children: 'Button',
		theme: 'primary',
		height: 'h-12',
	},
};
export const OutlineButton: StoryObj<typeof Button> = {
	args: {
		children: 'Button',
		theme: 'outline',
		height: 'h-12',
	},
};
export const TextButton: StoryObj<typeof Button> = {
	args: {
		children: 'Button',
		theme: 'text',
		height: 'h-12',
	},
};
export const DisabledButton: StoryObj<typeof Button> = {
	args: {
		children: 'DisabledButton',
		theme: 'primary',
		height: 'h-12',
		disabled: true,
	},
};
