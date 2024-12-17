import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
    const { children, ...otherProps } = props;

    return (
        <button className={cls.btn} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
