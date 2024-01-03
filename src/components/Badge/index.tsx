import { ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export enum BadgeTheme {
	Gray = 'bg-gray-100 text-gray-600 bg-gray-600',
	Red = 'bg-red-100 text-red-700 bg-red-700',
	Yellow = 'bg-yellow-100 text-yellow-800 bg-yellow-800',
	Green = 'bg-green-100 text-green-700 bg-green-700',
	Blue = 'bg-blue-100 text-blue-700 bg-blue-700',
	Indigo = 'bg-indigo-100 text-indigo-700 bg-indigo-700',
	Purple = 'bg-purple-100 text-purple-700 bg-purple-700',
	Pink = 'bg-pink-100 text-pink-700 bg-pink-700',
	Zinc = 'bg-zinc-700 text-zinc-100 bg-zinc-100',
	Orange = 'bg-orange-100 text-orange-700 bg-orange-700',
}

export enum BadgeRounded {
	Md = 'rounded-md',
	Xl = 'rounded-xl',
}

export type PropsBadge = {
	theme: BadgeTheme;
	rounded: BadgeRounded;
	variant?: 'point' | 'cancel' | 'default';
	children?: ReactNode;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	key?: React.Key;
};

export default function index({
	theme,
	rounded,
	variant = 'default',
	children,
	onClick = () => {},
}: PropsBadge) {
	return (
		<span
			onClick={onClick}
			className={`inline-flex cursor-pointer m-1 h-[23px]
			 select-none items-center ${rounded} px-[10px] py-[2px] text-xs font-medium ${
				theme.split(' ')[0]
			} ${theme.split(' ')[1]}`}
		>
			{variant === 'point' && (
				<div
					className={`w-1.5 h-1.5 mr-1 rounded-full ${theme.split(' ')[2]}`}
				></div>
			)}
			{children}
			{variant === 'cancel' && (
				<XMarkIcon
					fill='none'
					strokeWidth={2}
					stroke='currentColor'
					className='w-4 h-4 ml-1'
				/>
			)}
		</span>
	);
}
