import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Select, { Option } from '../Select';
import Input from '../Input';
import axios from 'axios';
import { Pokemons } from '../../types/Pokemons';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { getRandomBadgeTheme } from '../../utils/randomBadgeTheme';

export type FormValues = {
	FirstName: string;
	Pokemons: Option['value'][];
	Surname: string;
};

interface FormProps {
	onSubmit?: (data: FormValues) => void;
	closeForm?: () => void;
}

const index: React.FC<FormProps> = ({ onSubmit, closeForm }) => {
	const { handleSubmit, control } = useForm<FormValues>({
		defaultValues: { FirstName: '', Surname: '', Pokemons: [] },
	});

	const [options, setOptions] = useState<Option[]>([]);

	useEffect(() => {
		(async function () {
			try {
				const response = await axios.get(
					'https://pokeapi.co/api/v2/pokemon/?limit=1118'
				);
				const pokemonRes: Pokemons = await response.data;

				setOptions(
					pokemonRes.results.map((e, i) => ({
						value: e.name,
						label: e.name,
						key: i,
						theme: getRandomBadgeTheme(),
					}))
				);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		})();
	}, []);

	const validatePokemons = (value: Option['value'][]): string | undefined => {
		if (value.length !== 4) {
			return 'Please select 4 Pokemon.';
		}
		return undefined;
	};

	const onSubmitForm = (data: FieldValues) => {
		if (onSubmit) onSubmit(data as FormValues);
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)} className='w-full h-full'>
			<Controller
				name='FirstName'
				rules={{
					required: 'This field is required',
					pattern: {
						value: /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ]{2,12}$/,
						message: 'Please enter a valid first name (2-12 characters)',
					},
				}}
				render={({ field, fieldState }) => {
					console.log(fieldState?.error?.message); //result {}
					return (
						<Input
							id={field.name}
							disabled={field.disabled}
							className='m-2 my-5'
							placeholder='Enter first name'
							label='First name'
							onBlur={field.onBlur}
							onChange={field.onChange}
							value={field.value}
							error={fieldState.invalid}
							message={fieldState?.error?.message}
							tooltip='Click on "Enter first name" to start entering'
						/>
					);
				}}
				control={control}
			/>
			<Controller
				name='Surname'
				rules={{
					required: 'This field is required',
					pattern: {
						value: /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ]{2,12}$/,
						message: 'Please enter a valid surname (2-12 characters)',
					},
				}}
				render={({ field, fieldState }) => {
					console.log(fieldState?.error?.message); //result {}
					return (
						<Input
							id={field.name}
							disabled={field.disabled}
							className='m-2 my-5'
							placeholder='Enter first name'
							label='First name'
							onBlur={field.onBlur}
							onChange={field.onChange}
							value={field.value}
							error={fieldState.invalid}
							message={fieldState?.error?.message}
							tooltip='Click on "Enter first name" to start entering'
						/>
					);
				}}
				control={control}
			/>
			<Controller
				name='Pokemons'
				control={control}
				rules={{
					required: 'Required',
					validate: validatePokemons,
				}}
				render={({ field, fieldState }) => (
					<Select
						{...field}
						disabled={field.disabled}
						options={options}
						error={fieldState.invalid}
						massage={fieldState?.error?.message}
						placeholder='Select Pokémon`s'
						label='Pokémon team'
						className='m-2 mb-10'
						tooltip='Click on "Select Pokémon`s" to open pokemon`s list'
					/>
				)}
			/>

			<div className='flex flex-row absolute bottom-0 right-0 m-3'>
				<Button
					height='h-6'
					theme='text'
					type='button'
					className='m-1 p-2'
					onClick={closeForm}
				>
					Cancel
				</Button>
				<Button
					height='h-6'
					theme='primary'
					className='m-1 p-2'
					disabled={false}
				>
					Save
				</Button>
			</div>
		</form>
	);
};

export default index;
