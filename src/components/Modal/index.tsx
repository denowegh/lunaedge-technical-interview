// src/components/Modal.tsx

import React, { FC, ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
interface ModalProps {
	isOpen: boolean;
	children: ReactNode;
}

const index: FC<ModalProps> = ({ isOpen, children }) => {
	return (
		<>
			{isOpen && (
				<div className='fixed inset-0 bg-gray-500 bg-opacity-75 shadow flex items-center justify-center'>
					<div className=' relative bg-white p-8 rounded-md'>{children}</div>
				</div>
			)}
		</>
	);
};

export default index;
