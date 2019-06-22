export const selectElement = (selector: string): Element | null => document.querySelector(selector);
export const scrollTo = (selector: string): void => {
    const el = selectElement(selector);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
};
