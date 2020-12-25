export interface ItemInterface {
    id: number | string;
    description: string;
    title: string;
    productAssets: string;
    images: {
        main: string;
        add: string[];
    };
    price: number;
}
