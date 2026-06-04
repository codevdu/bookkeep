/* eslint-disable react-refresh/only-export-components */
import { cva, cx, type VariantProps } from "class-variance-authority";
import type React from "react";
import { textVariants } from "./text";

export const inputTextVariants = cva(`
    w-full bg-transparent border-b border-solid border-ink-light/20 
    focus:border-book-base outline-none transition-colors duration-200
`, {
    variants: {
        size: {
            md: "pb-2 px-1 text-base"
        },
        disabled: {
            true: "opacity-40 pointer-events-none select-none border-dashed border-ink-light/10"
        }
    },
    defaultVariants: {
        size: "md",
        disabled: false,
    }
})

interface IInputTextProps extends VariantProps<typeof inputTextVariants>, 
Omit<React.ComponentProps<"input">, "size" | "disabled"> { }

export default function InputText({
    size,
    disabled,
    className,
    ...props
}: IInputTextProps) {
    const isDisabled = !!disabled;

    return (
        <input
            disabled={isDisabled}
            className={cx(
                inputTextVariants({
                    size,
                    disabled: isDisabled
                }), 
                textVariants({ 
                    variant: "body-md" 
                }),
                className
            )}
            {...props}
        />
    )
}