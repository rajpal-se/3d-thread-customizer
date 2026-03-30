import classNames from 'classnames';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'default' | 'outline' | 'ghost';

interface ButtonProps
    extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
    default:
        'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 text-white shadow-[0_14px_30px_rgba(234,88,12,0.28)] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    outline:
        'border border-stone-300 bg-white/75 text-stone-900 hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    ghost: 'bg-transparent text-stone-700 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
};

function Button({
    children,
    className,
    title,
    type = 'button',
    variant = 'default',
    ...restProps
}: ButtonProps) {
    return (
        <button
            type={type}
            className={classNames(
                'inline-flex cursor-pointer items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-200',
                variantClasses[variant],
                className,
            )}
            {...restProps}
        >
            {children ?? title}
        </button>
    );
}

export default Button;
