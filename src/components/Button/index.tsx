import React, { ReactNode, useEffect, useState } from 'react';

export type PropsCustomButton = {
	theme?: 'primary' | 'outline' | 'text';
	children?: ReactNode;
	type?: 'submit' | 'reset' | 'button';
	height: 'h-5' | 'h-6' | 'h-8' | 'h-10' | 'h-12';
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
	children,
	height,
	disabled,
	type,
	theme = 'primary',
	onClick = () => {},
	className = '',
}: PropsCustomButton) {
	const [colors, setColors] = useState<Colors | null>(null);

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

	return (
		<button
			type={type}
			className={`flex items-center justify-evenly ${height} py-1 px-2 rounded ${
				colors?.bgColor || ''
			}  text-base ${colors?.textColor || ''} border border-1 ${
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
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
