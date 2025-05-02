import { cn } from "@/lib/utils";
import { Switch as SwitchPrimitives } from "radix-ui";
import { tv, VariantProps } from "tailwind-variants";

type SwitchProps = Omit<SwitchPrimitives.SwitchProps, "onChange" | "onCheckedChange"> &
  VariantProps<typeof switchVariants> & {
    onChange?: (checked: boolean) => void;
  };

const switchVariants = tv({
  slots: {
    root: cn(
      "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-[0.25rem] border-transparent transition-colors duration-100",
      "data-[state=unchecked]:bg-border",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
      "disabled:pointer-events-none disabled:opacity-50",
    ),
    thumb: cn(
      "pointer-events-none block rounded-full bg-white shadow-xs",
      "data-[state=unchecked]:translate-x-0",
      "transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
    ),
  },
  variants: {
    size: {
      small: {
        root: "h-5 w-8",
        thumb: "size-[0.75rem] data-[state=checked]:translate-x-[0.75rem]",
      },
      medium: {
        root: "h-6 w-10",
        thumb: "size-[1rem] data-[state=checked]:translate-x-[1rem]",
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const Switch = ({ className, onChange, size, ...props }: SwitchProps) => {
  const variants = switchVariants({ size, className });

  return (
    <SwitchPrimitives.Root className={variants.root()} onCheckedChange={onChange} {...props}>
      <SwitchPrimitives.Thumb className={variants.thumb()} />
    </SwitchPrimitives.Root>
  );
};

export { Switch };
