/* eslint-disable react-refresh/only-export-components */
import type React from "react";
import Text from "./text";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";

export const badgeVariants = cva("inline-flex items-center justify-center rounded-full border transition-colors duration-200", {
    variants: {
        variant: {
            none: "bg-ink-light opacity-10 transition-all animate-ping",
            available: "bg-status-available-bg border-status-available-text/10",
            borrowed: "bg-status-borrowed-bg border-status-borrowed-text/10",
        },
        size: {
            sm: "py-0.5 px-2.5"
        }
    },
    defaultVariants: {
        variant: "available",
        size: "sm"
    }
})

export const badgeTextVariants = cva("", {
    variants: {
        variant: {
            none: "",
            available: "text-status-available-text",
            borrowed: "text-status-borrowed-text",
        }
    },
    defaultVariants: {
        variant: "available"
    }
})

export const badgeSkeletonVariants = cva("", {
    variants: {
        size: {
            sm: "w-20 h-5.75 m-px"
        }
    },
    defaultVariants: {
        size: "sm"
    }
})

interface IBadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
    loading?: boolean
}

export default function Badge({
    variant,
    size,
    className,
    children,
    loading,
    ...props
}: IBadgeProps) {
    if (loading) {
        return (
            <Skeleton
                rounded="full"
                className={cx(
                    badgeVariants({ variant: "none" }),
                    badgeSkeletonVariants({ size }),
                    className
                )}
            />
        )
    }
    
    return (
        <div className={badgeVariants({ className, size, variant })} {...props}>
            <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
                {children}
            </Text>
        </div>
    )
}