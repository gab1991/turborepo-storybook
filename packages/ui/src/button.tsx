import type { ButtonHTMLAttributes, ReactNode } from 'react';
import s from './button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
	return (
		<button className={s.button} type="button" {...other}>
			{children}
		</button>
	);
}

Button.displayName = 'Button';
