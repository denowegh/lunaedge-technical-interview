import type { Meta, StoryObj } from '@storybook/react';
import '../index.css';
import Badge, { BadgeRounded, BadgeTheme } from '../components/Badge';

const meta: Meta<typeof Badge> = {
	title: 'Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {
		theme: {
			options: BadgeTheme,
			control: { type: 'select' },
		},
		rounded: {
			options: BadgeRounded,
			control: { type: 'select' },
		},
	},
};

export default meta;

export const StandartBadge: StoryObj<typeof Badge> = {
	args: {
		children: 'badge',
		rounded: BadgeRounded.Md,
		theme: BadgeTheme.Green,
	},
};
export const CancelBadge: StoryObj<typeof Badge> = {
	args: {
		children: 'badge',
		variant: 'cancel',
		rounded: BadgeRounded.Md,
		theme: BadgeTheme.Green,
	},
};
export const PointtBadge: StoryObj<typeof Badge> = {
	args: {
		children: 'badge',
		variant: 'point',
		rounded: BadgeRounded.Md,
		theme: BadgeTheme.Green,
	},
};
