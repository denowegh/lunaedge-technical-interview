import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import { XMarkIcon } from '@heroicons/react/24/solid';
import FormSignUp, { FormValues } from './components/FormSignUp';
import Button from './components/Button';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [dataUser, setDataUser] = useState<FormValues | undefined>();

	useEffect(() => {
		const credentials = localStorage.getItem('credentials');
		if (credentials) setDataUser(JSON.parse(credentials));
	}, []);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleSubmit = (data: FormValues) => {
		setDataUser(data);
		localStorage.setItem('credentials', JSON.stringify(data));

		closeModal();
	};

	const handlerSignOut = () => {
		setDataUser(undefined);
		localStorage.removeItem('credentials');
	};

	return (
		<div className=' flex justify-center items-center flex-row relative top-[100px] '>
			{!dataUser ? (
				<Button onClick={openModal} height='h-8' theme='primary'>
					Sign Up
				</Button>
			) : (
				<div className='flex justify-center items-center flex-col'>
					<div className='flex flex-row p-3'>
						<h3 className='m-1'>
							{dataUser.FirstName} {dataUser.Surname}
						</h3>
						<Button
							onClick={handlerSignOut}
							height='h-8'
							theme='outline'
							className='px-2 m-1'
						>
							Sign Out
						</Button>
					</div>
					<p className='my-4'>Your team:</p>
					{dataUser.Pokemons.map(e => (
						<p className='my-2 font-bold'>{e}</p>
					))}
				</div>
			)}
			<Modal isOpen={isModalOpen}>
				<h3 className='absolute top-0 left-0 mx-5 my-2  font-semibold'>
					Sign Up
				</h3>
				<button className='absolute top-0 right-0 p-4' onClick={closeModal}>
					<XMarkIcon className=' fill-black w-5 h-5' />
				</button>
				<FormSignUp onSubmit={handleSubmit} closeForm={closeModal} />
			</Modal>
		</div>
	);
}

export default App;
