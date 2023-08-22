export const parseFormData = (formData: FormData) => {
    return Object.fromEntries(formData) as Record<string, string>;
}