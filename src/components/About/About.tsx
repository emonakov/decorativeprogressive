import React, { useState, useEffect, useCallback } from 'react';
import parse from 'html-react-parser';

import ContentWrapper from '../../shared/components/ContentWrapper';
import getAboutContent from '../../mocks/about';

const HomePageTextWrapper: React.FC = () => {
    const [about, setAbout] = useState({
        loading: true,
        content: {},
        errors: [],
    });
    const getAboutContentCallback = useCallback(() => (getAboutContent()), []);
    useEffect(() => {
        (async () => {
            const { loading, content } = await getAboutContentCallback();
            setAbout({ loading, content: parse(content), errors: [] });
        })();
    }, [getAboutContentCallback]);

    const { loading, content } = about;

    return (!loading && (
        <ContentWrapper>
            {content}
        </ContentWrapper>
    )) || null;
};

export default HomePageTextWrapper;
