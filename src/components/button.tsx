/* eslint-disable react-refresh/only-export-components */
import React from "react";
import Icon from "./icon";
import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

export const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer transition-all duration-200 rounded-lg group gap-2 font-sans
`, {
    variants: {
        variant: {
            primary: "bg-book-base hover:bg-book-dark text-white shadow-flat active:scale-[0.98]",
            secondary: "bg-parchment-200 hover:bg-book-light/40 text-ink-dark border border-ink-light/10",
            danger: "bg-status-overdue-bg hover:bg-status-overdue-text hover:text-white text-status-overdue-text border border-status-overdue-text/10"
        },
        size: {
            sm: "h-9 py-1.5 px-3 text-sm",
            md: "h-11 py-2.5 px-5 text-base"
        },
        disabled: {
            true: "opacity-40 pointer-events-none grayscale"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false
    }
})

export const buttonIconVariants = cva("transition-colors duration-200", {
    variants: {
        variant: {
            primary: "fill-white group-hover:fill-white",
            secondary: "fill-ink-light group-hover:fill-book-dark",
            danger: "fill-status-overdue-text group-hover:fill-white"
        },
        size: {
            sm: "w-4 h-4",
            md: "w-5 h-5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})

export const buttonTextVariants = cva("transition-colors duration-200", {
    variants: {
        variant: {
            primary: "text-white",
            secondary: "text-ink-dark group-hover:text-book-dark",
            danger: "text-status-overdue-text group-hover:text-white"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

interface IButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"]
}

export default function Button({
    variant,
    size,
    disabled,
    className,
    children,
    icon: IconComponent,
    ...props
}: IButtonProps) {
    
    // Força o estado desativado nativo se a prop disabled do CVA for true
    const isDisabled = !!disabled;

    return (
        <button
            {...props}
            disabled={isDisabled}
            className={buttonVariants({
                variant,
                size,
                disabled: isDisabled,
                className
            })}
        >
            {IconComponent && (
                <Icon
                    svg={IconComponent}
                    className={buttonIconVariants({
                        variant,
                        size,
                    })}
                />
            )}
            <Text
                variant={size === "sm" ? "body-sm-bold" : "body-md-bold"}
                className={buttonTextVariants({ variant })}
            >
                {children}
            </Text>
        </button>
    )
}