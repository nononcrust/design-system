"use client";

import { cn } from "@/lib/utils";
import { Popover as PopoverPrimitives } from "radix-ui";
import React from "react";

type PopoverProps = Omit<PopoverPrimitives.PopoverProps, "open"> & {
  isOpen?: boolean;
};

export const Popover = ({ children, isOpen, ...props }: PopoverProps) => {
  return (
    <PopoverPrimitives.Root open={isOpen} {...props}>
      {children}
    </PopoverPrimitives.Root>
  );
};

type PopoverContentProps = React.ComponentPropsWithRef<typeof PopoverPrimitives.Content>;

const PopoverContent = ({ className, children, sideOffset = 4, ...props }: PopoverContentProps) => {
  return (
    <PopoverPrimitives.Portal>
      <PopoverPrimitives.Content
        sideOffset={sideOffset}
        className={cn(
          "border-border bg-background text-main relative z-50 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-[8px] border shadow-lg outline-hidden",
          "max-h-[calc(var(--radix-popover-content-available-height)-8px)]",
          "animate-in fade-in-0",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      >
        {children}
      </PopoverPrimitives.Content>
    </PopoverPrimitives.Portal>
  );
};

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverPrimitives.Trigger>;

const PopoverTrigger = ({ children, ...props }: PopoverTriggerProps) => {
  return (
    <PopoverPrimitives.Trigger aria-controls={undefined} {...props}>
      {children}
    </PopoverPrimitives.Trigger>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Close = PopoverPrimitives.Close;
