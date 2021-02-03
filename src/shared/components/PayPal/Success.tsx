import React from 'react';
import styled from 'styled-components';
import countryCode from 'country-code-lookup';

import { PaypalOrderInterface } from '../../../Interfaces/PaypalOrderInterface';

const Header = styled.h4`
    margin: 0;
`;

const List = styled.ul`
    padding: ${({ theme }) => theme.paddingMd} 0;
    margin: 0;
    list-style: none;
`;

const Success: React.FC<{ data?: PaypalOrderInterface }> = ({ data }) => {
    let name = null;
    let address = null;

    if (data) {
        const [purchase] = data.purchase_units;
        const { shipping } = purchase;
        name = shipping.name;
        address = shipping.address;
    }

    return (
        <>
            <Header>Congratulations! Your order will be delivered to:</Header>
            <List>
                <li>{name?.full_name}</li>
                <li>{address?.address_line_1}</li>
                {address?.address_line_2 && <li>{address.address_line_2}</li>}
                {address?.admin_area_1 && <li>{address.admin_area_1}</li>}
                {address?.admin_area_2 && <li>{address.admin_area_2}</li>}
                <li>{address?.postal_code}</li>
                <li>{address?.country_code && countryCode.byIso(address.country_code).country}</li>
            </List>
        </>
    );
};

export default Success;
