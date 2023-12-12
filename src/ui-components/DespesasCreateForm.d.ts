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
export declare type DespesasCreateFormInputValues = {
    title?: string;
    value?: number;
};
export declare type DespesasCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DespesasCreateFormOverridesProps = {
    DespesasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DespesasCreateFormProps = React.PropsWithChildren<{
    overrides?: DespesasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DespesasCreateFormInputValues) => DespesasCreateFormInputValues;
    onSuccess?: (fields: DespesasCreateFormInputValues) => void;
    onError?: (fields: DespesasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DespesasCreateFormInputValues) => DespesasCreateFormInputValues;
    onValidate?: DespesasCreateFormValidationValues;
} & React.CSSProperties>;
export default function DespesasCreateForm(props: DespesasCreateFormProps): React.ReactElement;
