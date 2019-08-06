export interface ItemInterface {
    id: number;
    description: string;
    title: string;
    images: {
        main: string;
        add: string[];
    };
    price: number;
}
