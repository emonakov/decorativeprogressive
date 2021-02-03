export interface PaypalOrderInterface {
    // eslint-disable-next-line camelcase
    purchase_units: Array<{
        shipping: {
            name: {
                full_name: string; // eslint-disable-line camelcase
            };
            address: {
                address_line_1: string // eslint-disable-line camelcase
                address_line_2: string // eslint-disable-line camelcase
                admin_area_1: string // eslint-disable-line camelcase
                admin_area_2: string // eslint-disable-line camelcase
                country_code: string // eslint-disable-line camelcase
                postal_code: string // eslint-disable-line camelcase
            };
        };
    }>;
}
