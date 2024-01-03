import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import Select from '../components/Select';
import { getRandomBadgeTheme } from '../utils/randomBadgeTheme';
const options = [
	{ key: 1, value: 'option1', label: 'Option 1' },
	{ key: 2, value: 'option2', label: 'Option 2' },
	{ key: 3, value: 'option3', label: 'Option 3' },
	{ key: 4, value: 'option1', label: 'Option 1' },
	{ key: 5, value: 'option2', label: 'Option 2' },
	{ key: 6, value: 'option3', label: 'Option 3' },
	{ key: 7, value: 'option1', label: 'Option 1' },
	{ key: 8, value: 'option2', label: 'Option 2' },
	{ key: 9, value: 'option3', label: 'Option 3' },
	{ key: 10, value: 'option1', label: 'Option 1' },
	{ key: 11, value: 'option2', label: 'Option 2' },
	{ key: 12, value: 'option3', label: 'Option 3' },
];
const meta: Meta<typeof Select> = {
	title: 'Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {
		options: { control: 'object', defaultValue: options },
		error: { control: 'boolean', defaultValue: false },
		disabled: { control: 'boolean', defaultValue: false },
	},
};

export default meta;

export const PasswordInput: StoryObj<typeof Select> = {
	args: {
		options: options.map(e => ({ ...e, theme: getRandomBadgeTheme() })),
		label: 'label',
		placeholder: 'placeholder',
		tooltip: 'tooltip',
		massage: 'massage',
	},
};
export const ErrorInput: StoryObj<typeof Select> = {
	args: {
		options: options.map(e => ({ ...e, theme: getRandomBadgeTheme() })),
		label: 'label',
		placeholder: 'placeholder',
		tooltip: 'tooltip',
		error: true,
		massage: 'massage',
	},
};
export const DisabledInput: StoryObj<typeof Select> = {
	args: {
		options: options.map(e => ({ ...e, theme: getRandomBadgeTheme() })),
		label: 'label',
		placeholder: 'placeholder',
		tooltip: 'tooltip',
		disabled: true,
		massage: 'massage',
	},
};
