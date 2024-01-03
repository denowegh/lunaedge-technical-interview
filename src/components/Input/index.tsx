import React, { ReactNode, useEffect, useState } from 'react';
import { EnvelopeIcon, EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/20/solid';
export type PropsCustomButton = {
	disabled?: boolean;
	type?: 'text' | 'password' | 'email' | 'number';
	className?: string;
	placeholder?: string;

	id: string;
	label?: string;
	tooltip?: string;
	error?: boolean;
	massage?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function index({
	type = 'text',
	placeholder = '',
	id,
	label = '',
	tooltip = '',
	className = '',
	error = false,
	disabled = false,
	massage = '',
	onChange = () => {},
}: PropsCustomButton) {
	const [typeInput, setTypeInput] =
		useState<React.HTMLInputTypeAttribute>(type);
	return (
		<div
			className={`w-[400px] flex flex-col gap-[8px] justify-center ${className}`}
		>
			<label htmlFor={id} className='flex flex-row items-center'>
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
				className={`flex items-center py-[12px] w-full px-[16px] gap-[8px] h-[40px] rounded-[8px] ${
					!disabled
						? ' outline outline-2  text-gray-900  outline-gray-300  bg-white hover:outline-indigo-600 focus-within:outline-indigo-600 '
						: 'outline-indigo-100 text-indigo-200 bg-indigo-50 hover:outline-indigo-100  focus-within:outline-indigo-100'
				}   ${
					error &&
					!disabled &&
					' outline-rose-500 hover:outline-rose-500 focus-within:outline-rose-500'
				}`}
			>
				<input
					type={typeInput}
					id={id}
					disabled={disabled}
					onChange={onChange}
					className={`w-full h-full text-sm ${
						disabled && 'placeholder-indigo-200'
					} focus:outline-none`}
					placeholder={placeholder}
				/>
				{type == 'password' && (
					<button disabled={disabled}>
						{typeInput == 'text' ? (
							<EyeSlashIcon
								fill='currentColor'
								className={`w-6 h-6 ${error && !disabled && ' fill-rose-500'}`}
								onClick={() => {
									setTypeInput('password');
								}}
							/>
						) : (
							<EyeIcon
								fill='currentColor'
								className={`w-6 h-6 ${error && !disabled && ' fill-rose-500'}`}
								onClick={() => {
									setTypeInput('text');
								}}
							/>
						)}
					</button>
				)}
			</div>
			<p className={`${error && !disabled && 'text-rose-500'}`}>{massage}</p>
		</div>
	);
}
