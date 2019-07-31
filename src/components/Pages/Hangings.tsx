import React, { useState, useCallback, useEffect } from 'react';
import { HangingsPageHero } from '../Heroes';
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
            <HangingsPageHero />
            <ContentWrapper>{content}</ContentWrapper>
        </>
    )) || null;
};

export default HangingsPage;
