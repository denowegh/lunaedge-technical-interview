import React, { useEffect, useState } from 'react';
import {
	ChevronDownIcon,
	XMarkIcon,
	InformationCircleIcon,
} from '@heroicons/react/24/solid';
import Badge, { BadgeRounded, BadgeTheme } from '../Badge';
import ButtonSort from '../ButtonSort';

export interface Option {
	value: string;
	label: string;
	key: any;
	theme: BadgeTheme;
}

interface MultiselectDropdownProps {
	options: Option[];
	onChange?: (selected: Option['value'][]) => void;
	disabled?: boolean;
	placeholder?: string;
	error?: boolean;
	tooltip?: string;
	label?: string;
	className?: string;
	massage?: string;
}

const MultiselectDropdown: React.FC<MultiselectDropdownProps> = ({
	options,
	placeholder = '',
	error,
	disabled,
	className,
	tooltip = '',
	onChange,
	label = '',
	massage = '',
}) => {
	const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
	const [sortedOptions, setSortedOptions] = useState<Option[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		setSortedOptions(options);
	}, [options]);
	const toggleDropdown: React.MouseEventHandler<HTMLDivElement> = e => {
		setIsOpen(!isOpen);
	};

	const handleSort = (order: 'asc' | 'desc' | 'default') => {
		let sortedData: Option[];

		switch (order) {
			case 'asc':
				sortedData = [...sortedOptions].sort((a, b) =>
					a.label.localeCompare(b.label)
				);
				break;
			case 'desc':
				sortedData = [...sortedOptions].sort((a, b) =>
					b.label.localeCompare(a.label)
				);
				break;
			default:
				sortedData = options;
				break;
		}

		setSortedOptions(sortedData);
	};

	const handleOptionClick = (option: Option) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions(selectedOptions.filter(item => item !== option));
		} else {
			setSelectedOptions([...selectedOptions, option]);
		}
		if (onChange) onChange(selectedOptions.map(e => e.value));
	};
	useEffect(() => {
		if (onChange) onChange(selectedOptions.map(e => e.value));
	}, [selectedOptions]);

	const handleRemoveOption = (
		option: Option,
		e?: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (e) e.stopPropagation();
		setSelectedOptions(selectedOptions.filter(item => item !== option));
	};

	const clearSelection: React.MouseEventHandler<HTMLButtonElement> = e => {
		e.stopPropagation();
		setSelectedOptions([]);
		if (onChange) onChange(selectedOptions.map(e => e.value));
	};

	return (
		<div className={`relative w-[400px] m-2 ${className} `}>
			<div className='flex flex-col gap-[8px]'>
				<label className='flex flex-row items-center'>
					{label}
					{tooltip && (
						<div
							className='w-5 h-5 ml-1 flex items-center justify-center'
							title={tooltip}
						>
							<InformationCircleIcon
								fill={`currentColor`}
								className={`w-full h-full `}
							/>
						</div>
					)}
				</label>
				<div
					className={`border-2 border-gray-300 w-full h-[32px] rounded-[4px] gap-[4px] px-[12px] py-[8px] flex items-center justify-between ${
						!disabled && 'cursor-pointer'
					}  ${
						selectedOptions.length === 0 &&
						'hover:border-indigo-600 focus:border-indigo-700'
					} ${error && !disabled && 'border-rose-500 hover:border-rose-500'} ${
						disabled && ' bg-indigo-50 border-none text-indigo-200'
					}`}
					onClick={disabled ? () => {} : toggleDropdown}
				>
					<div className='flex flex-row overflow-hidden'>
						{selectedOptions.length === 0 ? (
							<span className='text-gray-500 select-none'>{placeholder}</span>
						) : (
							<div className='flex flex-row'>
								{selectedOptions.map(option => (
									<Badge
										key={option.key}
										onClick={e => handleRemoveOption(option, e)}
										theme={option.theme}
										variant='cancel'
										rounded={BadgeRounded.Md}
									>
										{option.label}
									</Badge>
								))}
							</div>
						)}
					</div>
					<div className='flex flex-row'>
						{selectedOptions.length !== 0 && (
							<button className='text-black ml-2' onClick={clearSelection}>
								<XMarkIcon className='h-5 w-5' />
							</button>
						)}

						<ChevronDownIcon
							className={`h-5 w-5 text-black transition-all ${
								isOpen ? 'rotate-180' : ''
							} `}
						/>
					</div>
				</div>
				<p
					className={` text-gray-500 ${error && !disabled && 'text-rose-500'}`}
				>
					{massage}
				</p>
			</div>
			{isOpen && (
				<div className='absolute flex flex-col max-h-80  overflow-auto z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg'>
					<ButtonSort
						onSort={handleSort}
						theme='text'
						type='button'
						children='Sort by label'
						height='h-6'
					/>
					{sortedOptions.map(option =>
						selectedOptions.includes(option) ? (
							<Badge
								key={option.key}
								onClick={() => handleRemoveOption(option)}
								theme={option.theme}
								variant='point'
								rounded={BadgeRounded.Md}
							>
								{option.label}
							</Badge>
						) : (
							<Badge
								key={option.key}
								theme={option.theme}
								onClick={() => handleOptionClick(option)}
								rounded={BadgeRounded.Md}
							>
								{option.label}
							</Badge>
						)
					)}
				</div>
			)}
		</div>
	);
};

export default MultiselectDropdown;
