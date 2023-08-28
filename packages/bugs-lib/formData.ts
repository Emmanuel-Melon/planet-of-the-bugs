import type { ZodErrorMap, ZodObject } from "zod";

export const parseFormData = (formData: FormData) => {
    return Object.fromEntries(formData) as Record<string, string>;
}

type ValidatedFormData = {
    formData: Record<string, string>,
    errors: ZodErrorMap | null;
}

export const validateFormData = (parsedFormData: Record<string, string>, schema: ZodObject<any>): ValidatedFormData => {
    try {
        const formData = schema.parse(parsedFormData);
        return {
            formData,
            errors: null
        }
    } catch (error) {
        const errors = error.flatten();
        return {
            formData: parsedFormData,
            errors
        }
    }
}