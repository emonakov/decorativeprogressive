export const selectElement = (selector: string): Element | null => document.querySelector(selector);

export const scrollTo = (selector: string, top: boolean): void => {
    setTimeout(() => {
        if (top) {
            window.scrollTo({ top: 0 });
        } else {
            const el = selectElement(selector);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, 100);
};
