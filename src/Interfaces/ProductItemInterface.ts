export interface ItemInterface {
    id: number;
    description: string;
    title: string;
    productAssets: string;
    images: {
        main: string;
        add: string[];
    };
    price: number;
}
