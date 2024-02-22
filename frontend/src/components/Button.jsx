import React from "react"
import classNames from "classnames"

const Button = ({
    title,
    className,
    disabled = false,
    style = {},
    varient = "default",
    ...restProps
}) => {
    const buttonVarients = {
        default: classNames(
            `text-white bg-gradient-to-br from-pink-500 to-orange-400
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800
            font-bold rounded-lg text-sm px-5 py-2.5 text-center
            disabled:opacity-50 disabled:cursor-not-allowed`
        ),
    }

    return (
        <button
            className={classNames(buttonVarients[varient], className)}
            style={{ ...style }}
            disabled={disabled}
            {...restProps}
        >
            {title}
        </button>
    )
}

export default Button
