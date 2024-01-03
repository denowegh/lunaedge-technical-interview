import React, { ReactNode, useEffect, useState } from 'react';
import {
	ArrowsUpDownIcon,
	ArrowDownIcon,
	ArrowUpIcon,
} from '@heroicons/react/24/solid';

type SortingOrder = 'asc' | 'desc' | 'default';
export type PropsCustomButton = {
	theme?: 'primary' | 'outline' | 'text';
	height: 'h-5' | 'h-6' | 'h-8' | 'h-10' | 'h-12';
	disabled?: boolean;
	children?: ReactNode;
	type?: 'submit' | 'reset' | 'button';
	onSort: (order: SortingOrder) => void;
	className?: string;
};

type Colors = {
	bgColor: string;
	textColor: string;
	outlineColor: string;

	hoverBgColor?: string;
	hoverTextColor?: string;
	hoverOutlineColor?: string;

	activeBgColor?: string;
	activeTextColor?: string;
	activeOutlineColor?: string;

	focusOutlineColor?: string;
	focusBgColor?: string;
	focusTextColor?: string;
};

export default function index({
	height,
	disabled,
	theme = 'primary',
	onSort,
	children = '',
	className = '',
	type,
}: PropsCustomButton) {
	const [colors, setColors] = useState<Colors | null>(null);
	const [sortingOrder, setSortingOrder] = useState<SortingOrder>('default');

	useEffect(() => {
		switch (theme) {
			case 'primary':
				setColors({
					outlineColor: 'border-transparent',
					bgColor: 'bg-indigo-600',
					textColor: 'text-white',
					hoverBgColor: 'hover:bg-indigo-500',
					activeBgColor: 'active:bg-indigo-500',
					focusOutlineColor: 'focus:border-violet-700',
				});
				break;
			case 'outline':
				setColors({
					bgColor: 'bg-white',
					outlineColor: 'border-indigo-600',
					textColor: 'text-indigo-600',
					hoverOutlineColor: 'hover:border-indigo-500',
					hoverTextColor: 'hover:text-indigo-500',
					hoverBgColor: 'hover:bg-indigo-50',
					activeBgColor: 'active:bg-indigo-50',
					activeOutlineColor: 'active:border-indigo-500',
					activeTextColor: 'active:text-indigo-500',
					focusBgColor: 'focus:bg-indigo-50',
					focusOutlineColor: 'focus:border-indigo-600',
					focusTextColor: 'focus:text-indigo-600',
				});
				break;
			case 'text':
				setColors({
					bgColor: 'bg-white',
					outlineColor: 'border-transparent',
					textColor: 'text-black',
					hoverTextColor: 'hover:text-indigo-500',
					hoverBgColor: 'hover:bg-indigo-50',
					activeBgColor: 'active:bg-indigo-50',
					activeTextColor: 'active:text-indigo-500',
					focusBgColor: 'focus:bg-indigo-50',
					focusOutlineColor: 'focus:border-indigo-600',
					focusTextColor: 'focus:text-indigo-600',
				});
				break;
		}
	}, [theme]);

	const handleSort = () => {
		let newOrder: SortingOrder;

		switch (sortingOrder) {
			case 'asc':
				newOrder = 'desc';
				break;
			case 'desc':
				newOrder = 'default';
				break;
			default:
				newOrder = 'asc';
				break;
		}

		setSortingOrder(newOrder);
		onSort(newOrder);
	};

	return (
		<button
			type={type}
			className={`flex items-center m-1 justify-evenly ${height} py-1 rounded ${
				colors?.bgColor || ''
			} min-w-32 text-base ${colors?.textColor || ''} border border-1 ${
				colors?.outlineColor || ''
			} select-none ${colors?.hoverBgColor || ''} ${
				colors?.hoverOutlineColor || ''
			} ${colors?.hoverTextColor || ''} ${colors?.activeBgColor || ''}  ${
				colors?.activeOutlineColor || ''
			}  ${colors?.activeTextColor || ''} focus:border ${
				colors?.focusBgColor || ''
			} ${colors?.focusTextColor || ''} focus:border-2 ${
				colors?.focusOutlineColor || ''
			} ${className} ${
				disabled &&
				` cursor-not-allowed !bg-indigo-50 !text-indigo-200 !border-transparent`
			}`}
			onClick={handleSort}
			disabled={disabled}
		>
			{children}
			{sortingOrder === 'asc' && <ArrowUpIcon className='w-5 h-5' />}
			{sortingOrder === 'desc' && <ArrowDownIcon className='w-5 h-5' />}
			{sortingOrder === 'default' && <ArrowsUpDownIcon className='w-5 h-5' />}
		</button>
	);
}
