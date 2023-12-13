"use client";

import { createContext, forwardRef, useContext, useId } from "react";
import {FormProvider,Controller,useFormContext} from "react-hook-form";
import { Label } from "./label";
import {Slot} from "@radix-ui/react-slot";
import { CN } from "@/lib/utils";

const Form = FormProvider;
const FormFieldContext = createContext({});
const FormField = ({...props}) => (
  <FormFieldContext.Provider value={{name:props.name}}>
    <Controller {...props}/>
  </FormFieldContext.Provider>
);
const FormItemContext = createContext({});
const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const {getFieldState, formState} = useFormContext();
  const fieldState = getFieldState(fieldContext.name,formState);
  if(!fieldState){
    throw new Error("useFormField should be used within <FormField>");
  }
  const {id} = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
const FormItem = forwardRef(({className, ...props}, ref) => {
  const id = useId();
  return (
    <FormItemContext.Provider value={{id}}>
      <div ref={ref} className={CN(
        "space-y-2", className
      )} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = forwardRef(({className, ...props}, ref) => {
  const {error,formItemId} = useFormField();
  return (
    <Label ref={ref} className={CN(error && 'text-destructive', className)} {...props}/>
  )
});
FormLabel.displayName = "FormLabel"

const FormControl = forwardRef(({className, ...props},ref) => {
  const {error, formItemId, formDescriptionId, formMessageId} = useFormField();
  return (
    <Slot ref={ref} className={className} id={formItemId} aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`} aria-invalid={!!error} {...props} />
  )
});
FormControl.displayName = "FormControl"

const FormDescription = forwardRef(({className, ...props},ref) => {
  const {formDescriptionId} = useContext();
  return (
    <p ref={ref} id={formDescriptionId} className={CN(
      "text-sm text-muted-foreground", className
    )} />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = forwardRef(({className, children, ...props}, ref) => {
  const {error, formMessageId} = useFormField();
  const body = error ? String(error?.message) : children;
  if(!body){
    return null;
  }
  return (
    <p ref={ref} id={formMessageId} className={CN(
      "text-sm font-medium text-destructive", className
    )} {...props} >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"
export {Form, useFormField, FormItem, FormControl, FormDescription,FormField,FormLabel,FormMessage}