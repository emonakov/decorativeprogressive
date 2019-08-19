import React, { useEffect } from 'react';
import styled from 'styled-components';

import paypalButtonInit from '../../utils/paypal';

const ButtonContainer = styled.div`
    font-family: Julius Sans One;
    font-size: 1.2rem;
    padding: 20px 40px;
`;

const BuyButton: React.FC = () => {
    useEffect(() => {
        paypalButtonInit().render('#paypal-button-container');
    });

    return <ButtonContainer id="paypal-button-container" />;
};

export default BuyButton;
