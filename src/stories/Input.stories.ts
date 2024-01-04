import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import Input from '../components/Input';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['text', 'password', 'email', 'number'],
		},
		error: { control: 'boolean', defaultValue: false },
		disabled: { control: 'boolean', defaultValue: false },
	},
};

export default meta;

export const PasswordInput: StoryObj<typeof Input> = {
	args: {
		id: 'Id',
		label: 'label',
		type: 'password',
		placeholder: 'placeholder',
		tooltip: 'tooltip',
		message: 'massage',
	},
};
export const ErrorInput: StoryObj<typeof Input> = {
	args: {
		id: 'Id',
		label: 'label',
		type: 'password',
		placeholder: 'placeholder',
		tooltip: 'tooltip',
		error: true,
		message: 'massage',
	},
};
export const DisabledInput: StoryObj<typeof Input> = {
	args: {
		id: 'Id',
		label: 'label',
		type: 'password',
		placeholder: 'placeholder',
		tooltip: 'tooltip',
		disabled: true,
		message: 'massage',
	},
};
