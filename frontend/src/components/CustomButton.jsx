import React from "react"
import { useSnapshot } from "valtio"

import state from "../store"
import { getContrastingColor } from "../config/helpers"

const CustomButton = ({
    type,
    title,
    customStyles,
    handleClick,
    disabled = false,
    useDisableStyle = false,
    style = {},
}) => {
    const snap = useSnapshot(state)

    const disabledStyle = {
        color: "gray",
        backgroundColor: "silver",
        border: "unset",
        cursor: "not-allowed",
    }

    const generateStyle = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color),
            }
        } else if (type === "outline") {
            return {
                borderWidth: "1px",
                borderColor: snap.color,
                color: snap.color,
            }
        }
        return {}
    }

    return (
        <button
            className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={{
                ...generateStyle(type),
                ...(useDisableStyle && disabled ? disabledStyle : {}),
                ...style,
            }}
            onClick={handleClick}
            disabled={disabled}
        >
            {title}
        </button>
    )
}

export default CustomButton
