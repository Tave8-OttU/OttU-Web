import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isNoneBG?: boolean;
}
const Modal: React.FC<props> = ({ setIsOpen, children, isNoneBG }) => {
	const wrapperRef = useRef<HTMLImageElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (wrapperRef && !wrapperRef.current?.contains(event.target as Node)) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	return (
		<>
			{!isNoneBG && <Bg />}
			<Contaienr ref={wrapperRef}>{children}</Contaienr>
		</>
	);
};
export default Modal;
const Bg = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: #00000050;
	top: 0;
	left: 0;
	z-index: 1;
`;
const Contaienr = styled.div`
	z-index: 2;
`;
