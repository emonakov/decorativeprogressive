import React, { useState, useCallback, useEffect } from 'react';
import HangingsHero from '../Heroes/HangingsHero';
import ContentWrapper from '../../shared/components/ContentWrapper';

import getHangingsContent from '../../mocks/hangings';

const HangingsPage: React.FC = () => {
    const [hangingsContent, setHangingsContent] = useState({
        loading: true,
        content: '',
        errors: [],
    });
    const getHangingsContentCallback = useCallback(() => (getHangingsContent()), []);
    useEffect(() => {
        (async () => {
            const hangingsContentData = await getHangingsContentCallback();
            setHangingsContent(hangingsContentData);
        })();
    }, [getHangingsContentCallback]);

    const { loading, content } = hangingsContent;

    return (!loading && (
        <>
            <HangingsHero />
            <ContentWrapper>{content}</ContentWrapper>
        </>
    )) || null;
};

export default HangingsPage;
