import React from 'react'
import { IconType } from 'react-icons'

type Button = {

    title?: string,
    type: "submit"
    Icon?: JSX.Element
    OnClick?: () => void
    classname: string

}

const Button = ({ title, type, Icon, classname, OnClick }: Button) => {
    return (
        <button onClick={OnClick} type={type} className={`${classname}`}>
            {title ? title : ""}
            {/* {Icon ? <Icon/> : ""} */}
            {Icon}
        </button>

    )
}

export default Button
