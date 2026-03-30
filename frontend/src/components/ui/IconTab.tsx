import classNames from 'classnames';
import type { ButtonHTMLAttributes } from 'react';

interface IconTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string;
    label: string;
    isActive?: boolean;
    isFilterTab?: boolean;
    accentColor?: string;
}

const iconLabelMap: Record<string, string> = {
    color: 'CLR',
    file: 'FIL',
    'logo-shirt': 'LOG',
    'stylish-shirt': 'FUL',
};

function IconTab({
    accentColor,
    className,
    icon,
    isActive = false,
    isFilterTab = false,
    label,
    type = 'button',
    ...restProps
}: IconTabProps) {
    const activeStyle =
        isFilterTab && isActive
            ? {
                  backgroundColor: accentColor ?? '#D94E28',
                  opacity: 0.55,
              }
            : undefined;

    return (
        <button
            type={type}
            aria-pressed={isActive}
            aria-label={label}
            title={label}
            className={classNames(
                'inline-flex h-14 w-14 items-center justify-center border text-xs font-bold tracking-[0.18em] transition duration-200 select-none',
                isFilterTab
                    ? 'rounded-full border-white/50 bg-white/25 text-stone-900 shadow-[0_2px_30px_rgba(31,38,135,0.07)] backdrop-blur'
                    : 'rounded-xl border-stone-200 bg-white text-stone-700 hover:bg-stone-50',
                !isFilterTab &&
                    isActive &&
                    'border-orange-300 bg-orange-50 text-orange-700',
                className,
            )}
            style={activeStyle}
            {...restProps}
        >
            {iconLabelMap[icon] ?? label.slice(0, 3).toUpperCase()}
        </button>
    );
}

export default IconTab;
