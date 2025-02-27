import styles from './Input.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ isValid = true, className, ...props },
	ref
) {
	return (
		<input
			ref={ref}
			className={cn(className, styles['input'], {
				[styles['invalid']]: !isValid,
			})}
			{...props}
		/>
	);
});

export default Input;
