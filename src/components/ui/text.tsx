/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans text-ink-dark transition-colors duration-200", {
    variants: {
        variant: {
            "body-sm": "text-sm leading-5 font-normal text-ink-light",
            "body-sm-bold": "text-sm leading-5 font-semibold",
            "body-md": "text-base leading-6 font-normal",
            "body-md-bold": "text-base leading-6 font-semibold",
            
            "book-title-lg": "font-serif text-xl leading-7 font-bold text-ink-dark",
            "book-title-md": "font-serif text-lg leading-6 font-semibold text-ink-dark",
            "book-author": "font-sans text-sm italic text-ink-light",
            
            "logo-md": "font-serif text-lg leading-6 font-bold text-book-base",
            "logo-lg-bold": "font-serif text-3xl leading-8 font-extrabold text-book-dark tracking-wide",
            
            "status-available": "text-sm font-medium text-status-available-text",
            "status-borrowed": "text-sm font-medium text-status-borrowed-text",
            "status-overdue": "text-sm font-bold text-status-overdue-text"
        },
    },
    defaultVariants: {
        variant: "body-md"
    }
})

interface ITextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}

export default function Text({
    as = "span",
    variant,
    className,
    children,
    ...props
}: ITextProps) {
    return React.createElement(
        as,
        {
            className: textVariants({
                variant, 
                className
            }),
            ...props
        },
        children
    )
}