/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DespesasUpdateFormInputValues = {
    title?: string;
    value?: number;
};
export declare type DespesasUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DespesasUpdateFormOverridesProps = {
    DespesasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DespesasUpdateFormProps = React.PropsWithChildren<{
    overrides?: DespesasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    despesas?: any;
    onSubmit?: (fields: DespesasUpdateFormInputValues) => DespesasUpdateFormInputValues;
    onSuccess?: (fields: DespesasUpdateFormInputValues) => void;
    onError?: (fields: DespesasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DespesasUpdateFormInputValues) => DespesasUpdateFormInputValues;
    onValidate?: DespesasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DespesasUpdateForm(props: DespesasUpdateFormProps): React.ReactElement;
