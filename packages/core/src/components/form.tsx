"use client";

import { createContextFactory } from "@/lib/context";
import { cn } from "@/lib/utils";
import { Slot } from "radix-ui";
import { useId, useState } from "react";
import { Label } from "./label";

type FormProps = React.ComponentPropsWithRef<"form">;

export const Form = ({ children, ...props }: FormProps) => {
  return <form {...props}>{children}</form>;
};

type FormLabelProps = React.ComponentPropsWithRef<"label">;

const FormLabel = ({ className, children, ...props }: FormLabelProps) => {
  const { id } = useFormItemContext();

  return (
    <Label
      htmlFor={id}
      className={cn("text-main mb-2 w-fit text-sm font-medium", className)}
      {...props}
    >
      {children}
    </Label>
  );
};

type FormDescriptionProps = React.ComponentPropsWithoutRef<"p">;

const FormDescription = ({ className, children, ...props }: FormDescriptionProps) => {
  const { descriptionId, setDescriptionElement } = useFormItemContext();

  const refCallback = (node: HTMLParagraphElement | null) => {
    if (node) {
      setDescriptionElement(node);
    }

    return () => {
      setDescriptionElement(null);
    };
  };

  return (
    <p
      ref={refCallback}
      id={descriptionId}
      className={cn("text-subtle mt-1 text-[0.8125rem] font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
};

const FormControl = ({ children }: { children: React.ReactNode }) => {
  const { error, id, descriptionId, errorMessageId, descriptionElement, errorMessageElement } =
    useFormItemContext();

  return (
    <Slot.Root
      id={id}
      aria-describedby={
        cn(descriptionElement && descriptionId, errorMessageElement && errorMessageId) || undefined
      }
      aria-invalid={error || undefined}
    >
      {children}
    </Slot.Root>
  );
};

type FormErrorMessageProps = React.ComponentPropsWithoutRef<"p">;

const FormErrorMessage = ({ className, children, ...props }: FormErrorMessageProps) => {
  const { errorMessageId, setErrorMessageElement, error } = useFormItemContext();

  const refCallback = (node: HTMLParagraphElement | null) => {
    if (node) {
      setErrorMessageElement(node);
    }

    return () => {
      setErrorMessageElement(null);
    };
  };

  if (!error) return null;

  return (
    <p
      ref={refCallback}
      id={errorMessageId}
      className={cn("text-error mt-1 text-[0.8125rem] font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
};

type FormItemProps = React.ComponentPropsWithRef<"div"> & {
  error?: boolean;
};

const FormItem = ({ className, children, error = false, ...props }: FormItemProps) => {
  const id = useId();
  const descriptionId = useId();
  const errorMessageId = useId();

  const [descriptionElement, setDescriptionElement] = useState<HTMLParagraphElement | null>(null);
  const [errorMessageElement, setErrorMessageElement] = useState<HTMLParagraphElement | null>(null);

  return (
    <FormItemContext
      value={{
        error,
        descriptionId,
        errorMessageId,
        id,
        descriptionElement,
        errorMessageElement,
        setDescriptionElement,
        setErrorMessageElement,
      }}
    >
      <div className={cn("flex flex-col", className)} {...props}>
        {children}
      </div>
    </FormItemContext>
  );
};

type FormItemContextValue = {
  id: string;
  errorMessageId: string;
  descriptionId: string;
  error: boolean;
  descriptionElement: HTMLParagraphElement | null;
  errorMessageElement: HTMLParagraphElement | null;
  setDescriptionElement: (element: HTMLParagraphElement | null) => void;
  setErrorMessageElement: (element: HTMLParagraphElement | null) => void;
};

const [FormItemContext, useFormItemContext] =
  createContextFactory<FormItemContextValue>("FormItem");

Form.Item = FormItem;
Form.Control = FormControl;
Form.Label = FormLabel;
Form.Description = FormDescription;
Form.ErrorMessage = FormErrorMessage;
