import React from 'react';
import styled from 'styled-components';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

import ContentWrapper from '../../shared/components/ContentWrapper';
// import BuyButton from '../../shared/components/PayPal';
import Gallery from '../Product/Gallery';
import Description from '../Product/Description';
import { HomePageHero } from '../Heroes';

import { useGetProduct } from '../../services/products';

interface ProductProps {
    match: { params: { id: string } };
}

const ContentWrapperProduct = styled(ContentWrapper)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

// const ProdNav = styled.div`
//     text-align: right;
// `;

const ProductPage: React.FC<ProductProps> = ({ match }) => {
    const paypalClientId = process.env.REACT_APP_PAYPAL_CLIENT_ID as string;
    const test = process.env.REACT_APP_TEST_THING;
    console.log(test);
    const { loading, item } = useGetProduct(match.params.id);

    return (
        (!loading && item && (
            <>
                <HomePageHero>
                    <h1>{item.title}</h1>
                </HomePageHero>
                <ContentWrapper>
                    {/* <ProdNav>
                Prev | Next
            </ProdNav> */}
                    <ContentWrapperProduct>
                        <Gallery item={item} />
                        <Description item={item}>
                            <PayPalScriptProvider options={{ 'client-id': paypalClientId }}>
                                <PayPalButtons fundingSource={FUNDING.PAYPAL} />
                            </PayPalScriptProvider>
                            {/* <BuyButton item={item} /> */}
                        </Description>
                    </ContentWrapperProduct>
                </ContentWrapper>
            </>
        ))
        || null
    );
};

export default ProductPage;
