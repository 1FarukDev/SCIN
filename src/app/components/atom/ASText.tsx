import React from "react";
import { ReactNode } from "react";
import Image from "next/image";
interface ASTextProps {
    text: string | ReactNode;
    className?: any;
    link?: boolean;
    linkValue?: string;
    linkHref?: string;
    icon?: any;
    handleClick?: any;
    hasTextDash?: boolean
    rightIcon?: any
}

const ASText = ({
    text,
    className,
    link,
    linkValue,
    linkHref,
    icon,
    handleClick,
    hasTextDash,
    rightIcon
}: ASTextProps) => {
    return (
        <span onClick={handleClick} className="">
            <p className={className}>
                {icon && icon}
                {text}
                {link && (
                    <a href={linkHref} className="">
                        {linkValue}
                    </a>
                )}
                {rightIcon && rightIcon}
            </p>
        </span>
    );
};

ASText.defaultProps = {
    text: " ",
    link: false,
};

export default ASText;
