"use client";

import { createContext, useContext } from "react";
import {FormProvider,Controller,useFormContext} from "react-hook-form";

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
}


export {Form}