import styles from './Search.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
	{ isValid = true, className, ...props },
	ref
) {
	return (
		<div className={styles['input-wrapper']}>
			<input
				ref={ref}
				className={cn(className, styles['input'], {
					[styles['invalid']]: !isValid,
				})}
				{...props}
			/>
			<img className={styles['icon']} src="/search-icon.svg" alt="Search icon" />
		</div>
	);
});

export default Search;
