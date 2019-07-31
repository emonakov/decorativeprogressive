import React, { useState, useCallback, useEffect } from 'react';
import BagsHero from '../Heroes/BagsHero';
import ContentWrapper from '../../shared/components/ContentWrapper';

import getBagsContent from '../../mocks/bags';

const BagsPage: React.FC = () => {
    const [bagsContent, setBagsContent] = useState({
        loading: true,
        content: '',
        errors: [],
    });
    const getBagsContentCallback = useCallback(() => (getBagsContent()), []);
    useEffect(() => {
        (async () => {
            const bagsContentData = await getBagsContentCallback();
            setBagsContent(bagsContentData);
        })();
    }, [getBagsContentCallback]);

    const { loading, content } = bagsContent;

    return (!loading && (
        <>
            <BagsHero />
            <ContentWrapper>{content}</ContentWrapper>
        </>
    )) || null;
};

export default BagsPage;
